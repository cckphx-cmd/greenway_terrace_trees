// Tree catalog data from screenshots
const NATIVE_TREES = [
    { name: 'Blue Palo Verde', size: 'LARGE', growth: 'Fast', water: 'Low', thorny: true, powerline: false, beauty: true, shade: true, wildlife: true },
    { name: 'Palo Brea', size: 'MEDIUM', growth: 'Fast', water: 'Low', thorny: true, powerline: true, beauty: true, shade: true, wildlife: true },
    { name: 'Cascalote', size: 'MEDIUM', growth: 'Moderate', water: 'Low', thorny: true, powerline: false, beauty: true, shade: true, wildlife: true },
    { name: 'Velvet Mesquite', size: 'MEDIUM', growth: 'Slow', water: 'Low', thorny: true, powerline: false, beauty: true, shade: true, wildlife: true },
    { name: 'Thornless Hybrid Palo Verde', size: 'LARGE', growth: 'Fast', water: 'Low', thorny: false, powerline: false, beauty: true, shade: true, wildlife: true },
    { name: 'Thornless Mesquite', size: 'MEDIUM', growth: 'Moderate', water: 'Low', thorny: false, powerline: false, beauty: true, shade: true, wildlife: true },
    { name: 'Desert Willow', size: 'SMALL', growth: 'Fast', water: 'Low', thorny: false, powerline: true, beauty: true, shade: false, wildlife: true },
    { name: 'Ironwood', size: 'LARGE', growth: 'Slow', water: 'Low', thorny: true, powerline: false, beauty: true, shade: true, wildlife: true }
];

const NON_NATIVE_TREES = [
    { name: 'Chaste Tree', size: 'SMALL', growth: 'Fast', water: 'Low', thorny: false, powerline: true, beauty: true, shade: false, wildlife: true },
    { name: 'Red Push Pistache', size: 'MEDIUM', growth: 'Moderate', water: 'Low', thorny: false, powerline: true, beauty: true, shade: true, wildlife: false },
    { name: 'Chinese Elm', size: 'LARGE', growth: 'Fast', water: 'Moderate', thorny: false, powerline: false, beauty: true, shade: true, wildlife: false },
    { name: 'Shoestring Acacia', size: 'MEDIUM', growth: 'Fast', water: 'Low', thorny: false, powerline: true, beauty: true, shade: true, wildlife: false },
    { name: 'Mastic Tree', size: 'MEDIUM', growth: 'Slow', water: 'Low', thorny: false, powerline: true, beauty: true, shade: true, wildlife: false },
    { name: 'Texas Olive', size: 'SMALL', growth: 'Slow', water: 'Low', thorny: false, powerline: true, beauty: true, shade: false, wildlife: false },
    { name: 'Mulga Acacia', size: 'MEDIUM', growth: 'Moderate', water: 'Low', thorny: false, powerline: true, beauty: true, shade: true, wildlife: false },
    { name: 'Olive Tree', size: 'MEDIUM', growth: 'Slow', water: 'Low', thorny: false, powerline: false, beauty: true, shade: true, wildlife: false }
];

// Conversation state
const state = {
    currentStep: 'welcome',
    data: {},
    progress: 0
};

// Update progress indicator
function updateProgress(step, percentage) {
    state.progress = percentage;
    const progressDiv = document.getElementById('progressIndicator');
    if (progressDiv) {
        progressDiv.remove();
    }

    const messagesDiv = document.getElementById('chatMessages');
    const newProgress = document.createElement('div');
    newProgress.id = 'progressIndicator';
    newProgress.className = 'progress-indicator';
    newProgress.innerHTML = `
        <div><strong>${step}</strong></div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
    `;
    messagesDiv.insertBefore(newProgress, messagesDiv.firstChild);
}

// Add message to chat and scroll
function addMessage(text, isUser = false) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.innerHTML = text;

    messageDiv.appendChild(bubble);
    messagesDiv.appendChild(messageDiv);

    // Smooth scroll to bottom with slight delay to ensure rendering
    setTimeout(() => {
        messagesDiv.scrollTo({
            top: messagesDiv.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
}

// Clear input area
function clearInput() {
    document.getElementById('inputArea').innerHTML = '';
}

// Show buttons
function showButtons(buttons) {
    clearInput();
    const inputArea = document.getElementById('inputArea');
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn.text;
        button.onclick = btn.action;
        if (btn.className) {
            button.className = btn.className;
        }
        buttonGroup.appendChild(button);
    });

    inputArea.appendChild(buttonGroup);
}

// Show text input
function showTextInput(placeholder, onSubmit) {
    clearInput();
    const inputArea = document.getElementById('inputArea');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.id = 'userInput';

    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.className = 'submit-btn';
    button.onclick = () => {
        const value = input.value.trim();
        if (value) {
            addMessage(value, true);
            onSubmit(value);
        }
    };

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') button.click();
    });

    inputArea.appendChild(input);
    inputArea.appendChild(button);
    input.focus();
}

// Call address lookup API
async function lookupAddress(address) {
    try {
        const response = await fetch('/lookup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: address })
        });
        return await response.json();
    } catch (error) {
        console.error('Address lookup error:', error);
        return { success: false };
    }
}

// Get tree recommendations based on quiz answers
function getTreeRecommendations() {
    const { preferredSize, nativePreference, primaryGoal } = state.data;
    const trees = nativePreference === 'native' ? NATIVE_TREES : NON_NATIVE_TREES;

    let filtered = trees.filter(tree => {
        // Match size preference
        if (preferredSize && tree.size !== preferredSize) return false;

        // Match goal
        if (primaryGoal === 'BEAUTY' && !tree.beauty) return false;
        if (primaryGoal === 'WILDLIFE' && !tree.wildlife) return false;
        if (primaryGoal === 'SHADE' && !tree.shade) return false;

        return true;
    });

    // If no exact matches, return all trees of that type
    if (filtered.length === 0) filtered = trees;

    return filtered.slice(0, 3);
}

// Conversation flows
async function startWelcome() {
    updateProgress('Step 1: Address Verification', 10);
    addMessage(`Great! Let's check if your address qualifies.

Please enter your street address:

<div class="important-box">
<strong>GOOD EXAMPLES:</strong><br>
• 4302 North 20th St<br>
• 2133 W Edgemont Ave<br>
• 9012 West Pine Road<br><br>

<strong>IMPORTANT:</strong><br>
• Single-family homes or duplexes/triplexes only<br>
• No apartments or condos with 4+ units<br>
• <strong>Trees must be planted in the FRONT YARD only</strong>
</div>`);

    showTextInput('Enter your address...', async (address) => {
        state.data.userAddress = address;
        addMessage('Looking up your address... <span class="loading"></span>');

        const result = await lookupAddress(address);

        if (result.success) {
            state.data.confirmedAddress = result.match;
            state.data.eligible = true;
            askAddressConfirmation(result.match);
        } else {
            showNotEligible();
        }
    });
}

function askAddressConfirmation(matchedAddress) {
    addMessage(`I found this address:<br><br><strong>${matchedAddress}</strong><br><br>Is this correct?`);
    showButtons([
        { text: "Yes, that's correct", action: () => {
            addMessage("Yes, that's correct", true);
            askFrontYardConfirmation();
        }},
        { text: "No, try again", action: () => {
            addMessage("No, try again", true);
            startWelcome();
        }}
    ]);
}

function askFrontYardConfirmation() {
    addMessage(`Perfect! Just to confirm:<br><br><strong>The tree(s) will be planted in your FRONT YARD, correct?</strong><br><br>This is a requirement of the program.`);
    showButtons([
        { text: "Yes, front yard", action: () => {
            addMessage("Yes, front yard", true);
            state.data.frontYard = true;
            askHomeowner();
        }},
        { text: "No, I need backyard", action: () => {
            addMessage("No, I need backyard", true);
            addMessage(`I'm sorry, but this program only covers trees planted in the <strong>front yard</strong>. This helps with neighborhood beautification and heat reduction.

Would you like to explore other programs that might help?`);
            showNotEligible();
        }}
    ]);
}

function askHomeowner() {
    updateProgress('Step 2: Homeowner Verification', 30);
    addMessage(`Real quick, are you the homeowner, or do you rent this property?`);
    showButtons([
        { text: "I'm the homeowner", action: () => {
            addMessage("I'm the homeowner", true);
            state.data.homeownerStatus = 'homeowner';
            showMainMenu();
        }},
        { text: "I rent and have landlord permission", action: () => {
            addMessage("I rent and have landlord permission", true);
            state.data.homeownerStatus = 'renter_approved';
            askLandlordInfo();
        }},
        { text: "I rent but don't have permission yet", action: () => {
            addMessage("I rent but don't have permission yet", true);
            state.data.homeownerStatus = 'renter_pending';
            showLandlordLetter();
        }}
    ]);
}

function askLandlordInfo() {
    addMessage(`Great! I'll need your landlord's contact information to verify.<br><br>Please provide their name:`);
    showTextInput("Landlord name", (name) => {
        state.data.landlordName = name;
        addMessage(`And their email address:`);
        showTextInput("landlord@email.com", (email) => {
            state.data.landlordEmail = email;
            addMessage(`Finally, their phone number:`);
            showTextInput("(555) 555-5555", (phone) => {
                state.data.landlordPhone = phone;
                addMessage(`Perfect! We'll verify with ${name} before proceeding.`);
                showMainMenu();
            });
        });
    });
}

function showLandlordLetter() {
    addMessage(`No problem! Here's a letter template you can send to your landlord:

<div class="important-box">
<strong>Subject: Permission Request - Phoenix Free Tree Grant</strong><br><br>

Dear [Landlord Name],<br><br>

I'm writing to request permission to participate in the Phoenix Free Tree Grant - Canopy Tree Care Program.<br><br>

This is a FREE program that plants trees at no cost. Benefits:<br><br>

• Free planting (January 24, 2026)<br>
• Increased property value<br>
• Reduced cooling costs<br><br>

Deadline: December 31, 2025<br><br>

Learn more: <a href="https://www.phoenix.gov/administration/departments/heat/heat-response-programs.html" target="_blank">Phoenix Heat Response Programs</a><br><br>

If you approve, please reply to <strong>cckphx@gmail.com</strong> with your confirmation.<br><br>

Thank you,<br>
[Your Name]<br>
[${state.data.confirmedAddress}]
</div>

Would you like me to email this to you?`);

    showButtons([
        { text: "Yes, email it to me", action: () => {
            addMessage("Yes, email it to me", true);
            addMessage(`Please enter your email address:`);
            showTextInput("your@email.com", (email) => {
                state.data.userEmail = email;
                addMessage(`Great! I'll send the letter template to ${email}. Once you have landlord approval, come back and start over!`);
                addMessage(`Thank you for your interest in making Phoenix greener.`);
                clearInput();
            });
        }},
        { text: "I'll handle it myself", action: () => {
            addMessage("I'll handle it myself", true);
            addMessage(`Sounds good! Come back once you have landlord approval. Thanks for your interest!`);
            clearInput();
        }}
    ]);
}

function showNotEligible() {
    addMessage(`Your address isn't in our grant zone, but you're not out of luck!

<div class="important-box">
<strong>WHY NOT ELIGIBLE?</strong><br>
This grant covers a specific neighborhood boundary.<br><br>

<strong>WHAT TO DO:</strong><br><br>

<strong>Apply with the City:</strong><br>
<a href="https://www.phoenix.gov/parks/trees" class="link" target="_blank">phoenix.gov/parks/trees</a><br><br>

<strong>Trees Matter:</strong><br>
<a href="https://treesmatter.org" class="link" target="_blank">treesmatter.org</a><br><br>

<strong>SRP Program:</strong><br>
<a href="https://www.srpnet.com/trees" class="link" target="_blank">srpnet.com/trees</a><br><br>

<strong>QUESTIONS?</strong><br>
Visit: <a href="https://www.phoenix.gov/administration/departments/heat/heat-response-programs.html" class="link" target="_blank">Phoenix Heat Response Programs</a>
</div>

Thanks for wanting to grow green in Phoenix!`);
    clearInput();
}

function showMainMenu() {
    addMessage(`Wonderful! Let's go!<br><br>What would you like to do?`);
    showButtons([
        { text: "Take tree quiz", action: () => {
            addMessage("Take tree quiz", true);
            startTreeQuiz();
        }},
        { text: "View FAQ", action: () => {
            addMessage("View FAQ", true);
            showFAQ();
        }},
        { text: "Submit application", action: () => {
            addMessage("Submit application", true);
            collectPropertyInfo();
        }},
        { text: "Start over", action: () => {
            addMessage("Start over", true);
            location.reload();
        }}
    ]);
}

function startTreeQuiz() {
    updateProgress('Step 3: Tree Selection Quiz', 50);
    addMessage(`Great! Let's find the best tree for you.<br><br>First, do you prefer <strong>native</strong> or <strong>non-native</strong> trees?<br><br><strong>Native trees</strong> are adapted to Arizona's climate and support local wildlife.<br><strong>Non-native trees</strong> offer different aesthetics and may have different care requirements.`);
    showButtons([
        { text: "Native (Arizona adapted)", action: () => {
            addMessage("Native (Arizona adapted)", true);
            state.data.nativePreference = 'native';
            askTreeSize();
        }},
        { text: "Non-native (Ornamental)", action: () => {
            addMessage("Non-native (Ornamental)", true);
            state.data.nativePreference = 'non-native';
            askTreeSize();
        }}
    ]);
}

function askTreeSize() {
    addMessage(`How large would you like your tree to grow?<br><br><em>Trees are provided as 15-gallon or 25-gallon sizes. The mature height varies by species.</em>`);
    showButtons([
        { text: "Small (5-15 ft at maturity)", action: () => {
            addMessage("Small (5-15 ft at maturity)", true);
            state.data.preferredSize = 'SMALL';
            askPrimaryGoal();
        }},
        { text: "Medium (15-30 ft at maturity)", action: () => {
            addMessage("Medium (15-30 ft at maturity)", true);
            state.data.preferredSize = 'MEDIUM';
            askPrimaryGoal();
        }},
        { text: "Large (30+ ft at maturity)", action: () => {
            addMessage("Large (30+ ft at maturity)", true);
            state.data.preferredSize = 'LARGE';
            askPrimaryGoal();
        }}
    ]);
}

function askPrimaryGoal() {
    addMessage(`What's your most important reason for planting?`);
    showButtons([
        { text: "Beauty and flowering", action: () => {
            addMessage("Beauty and flowering", true);
            state.data.primaryGoal = 'BEAUTY';
            showTreeRecommendations();
        }},
        { text: "Wildlife habitat", action: () => {
            addMessage("Wildlife habitat", true);
            state.data.primaryGoal = 'WILDLIFE';
            showTreeRecommendations();
        }},
        { text: "Shade and cooling", action: () => {
            addMessage("Shade and cooling", true);
            state.data.primaryGoal = 'SHADE';
            showTreeRecommendations();
        }},
        { text: "All of the above", action: () => {
            addMessage("All of the above", true);
            state.data.primaryGoal = 'ALL';
            showTreeRecommendations();
        }}
    ]);
}

function showTreeRecommendations() {
    const recommendations = getTreeRecommendations();

    let recommendationHTML = `Based on your preferences, here are your recommended trees:<br><br>`;

    recommendations.forEach(tree => {
        recommendationHTML += `<div class="tree-option">
            <strong>${tree.name}</strong><br>
            <small>Size: ${tree.size} | Growth: ${tree.growth} | Water: ${tree.water}${tree.powerline ? ' | Powerline Friendly' : ''}</small>
        </div>`;
    });

    recommendationHTML += `<br>You can select up to 2 trees for your property.<br><br>
<a href="https://www.phoenix.gov/administration/departments/heat/tree-shade-programs/tree-grant-programs.html" class="link" target="_blank">Learn more about tree options and the program</a>`;

    addMessage(recommendationHTML);

    showButtons([
        { text: "Select my trees", action: () => {
            addMessage("Select my trees", true);
            askTreeSelection(recommendations);
        }},
        { text: "Retake quiz", action: () => {
            addMessage("Retake quiz", true);
            startTreeQuiz();
        }},
        { text: "Back to menu", action: () => {
            addMessage("Back to menu", true);
            showMainMenu();
        }}
    ]);
}

function askTreeSelection(recommendations) {
    // Initialize selectedTrees array if it doesn't exist
    if (!state.data.selectedTrees) {
        state.data.selectedTrees = [];
        addMessage(`Please select your tree(s) - you can choose up to 2 trees:`);
    }

    // Create buttons for each tree
    const buttons = recommendations.map(tree => {
        const isSelected = state.data.selectedTrees.includes(tree.name);
        return {
            text: tree.name,
            className: isSelected ? 'selected' : '',
            action: () => {
                handleTreeSelection(tree.name, recommendations);
            }
        };
    });

    // Add a "Done selecting" button
    buttons.push({
        text: state.data.selectedTrees.length > 0
            ? `Done selecting trees (${state.data.selectedTrees.length} selected)`
            : "Done selecting trees",
        className: 'done-button',
        action: () => {
            if (state.data.selectedTrees.length === 0) {
                addMessage("Please select at least one tree before continuing.");
                return;
            } else {
                const treeList = state.data.selectedTrees.join(', ');
                addMessage("Done selecting trees", true);
                state.data.treeChoices = treeList;
                addMessage(`Great! You selected: <strong>${treeList}</strong>`);
                collectPropertyInfo();
            }
        }
    });

    showButtons(buttons);
}

function handleTreeSelection(treeName, recommendations) {
    if (!state.data.selectedTrees) {
        state.data.selectedTrees = [];
    }

    if (state.data.selectedTrees.includes(treeName)) {
        // Deselect the tree
        state.data.selectedTrees = state.data.selectedTrees.filter(t => t !== treeName);
        addMessage(`Removed: ${treeName}`, true);
    } else {
        // Check if limit reached
        if (state.data.selectedTrees.length >= 2) {
            addMessage("You can only select up to 2 trees. Please deselect one first or click 'Done selecting trees'.");
            return;
        }
        // Add the tree
        state.data.selectedTrees.push(treeName);
        addMessage(`Selected: ${treeName}`, true);
    }

    // Show current selection
    const currentSelection = state.data.selectedTrees.length > 0
        ? `Current selection: <strong>${state.data.selectedTrees.join(', ')}</strong> (${state.data.selectedTrees.length}/2)`
        : 'No trees selected yet';
    addMessage(currentSelection);

    // Re-show the selection buttons
    clearInput();
    askTreeSelection(recommendations);
}

function collectPropertyInfo() {
    updateProgress('Step 4: Property Information', 70);
    addMessage(`Now, a few questions about your property:<br><br><strong>Do you need stumps or fully dead trees removed?</strong>`);
    showButtons([
        { text: "Yes", action: () => {
            addMessage("Yes", true);
            state.data.stumpRemoval = true;
            askComplexInstall();
        }},
        { text: "No", action: () => {
            addMessage("No", true);
            state.data.stumpRemoval = false;
            askComplexInstall();
        }}
    ]);
}

function askComplexInstall() {
    addMessage(`Do you have anything that makes it a complex install?<br><br><em>Examples: Turf, River rock, Fully shaded area, Other obstacles</em>`);
    showButtons([
        { text: "Yes", action: () => {
            addMessage("Yes", true);
            addMessage(`Please describe what makes it complex:`);
            showTextInput("e.g., Turf and river rock", (details) => {
                state.data.complexInstall = true;
                state.data.complexInstallDetails = details;
                askContactPreference();
            });
        }},
        { text: "No", action: () => {
            addMessage("No", true);
            state.data.complexInstall = false;
            state.data.complexInstallDetails = 'None';
            askContactPreference();
        }}
    ]);
}

function askContactPreference() {
    addMessage(`How would you prefer to be contacted?`);
    showButtons([
        { text: "Email", action: () => {
            addMessage("Email", true);
            state.data.contactPreference = 'email';
            askEmail();
        }},
        { text: "Phone call", action: () => {
            addMessage("Phone call", true);
            state.data.contactPreference = 'phone';
            askPhone();
        }},
        { text: "Both", action: () => {
            addMessage("Both", true);
            state.data.contactPreference = 'both';
            askEmail();
        }}
    ]);
}

function askEmail() {
    addMessage(`Please enter your email address:`);
    showTextInput("your@email.com", (email) => {
        state.data.userEmail = email;
        if (state.data.contactPreference === 'both') {
            askPhone();
        } else {
            askName();
        }
    });
}

function askPhone() {
    addMessage(`Please enter your phone number:`);
    showTextInput("(555) 555-5555", (phone) => {
        state.data.userPhone = phone;
        askSMSOptIn();
    });
}

function askSMSOptIn() {
    addMessage(`Would you like to receive text message updates?`);
    showButtons([
        { text: "Yes, text me", action: () => {
            addMessage("Yes, text me", true);
            state.data.smsOptIn = true;
            if (state.data.contactPreference === 'phone') {
                askEmail();
            } else {
                askName();
            }
        }},
        { text: "No, calls only", action: () => {
            addMessage("No, calls only", true);
            state.data.smsOptIn = false;
            if (state.data.contactPreference === 'phone') {
                askEmail();
            } else {
                askName();
            }
        }}
    ]);
}

function askName() {
    addMessage(`What's your first name?`);
    showTextInput("First name", (firstName) => {
        state.data.firstName = firstName;
        addMessage(`And your last name?`);
        showTextInput("Last name", (lastName) => {
            state.data.lastName = lastName;
            showReview();
        });
    });
}

function showReview() {
    updateProgress('Step 5: Review & Submit', 90);
    const review = `
<strong>Application Review</strong><br><br>

<strong>Address:</strong> ${state.data.confirmedAddress}<br>
<strong>Status:</strong> ${state.data.homeownerStatus}<br>
${state.data.landlordName ? `<strong>Landlord:</strong> ${state.data.landlordName} (${state.data.landlordEmail})<br>` : ''}
<strong>Trees:</strong> ${state.data.treeChoices || 'To be selected'}<br>
<strong>Stump removal:</strong> ${state.data.stumpRemoval ? 'Yes' : 'No'}<br>
<strong>Complex install:</strong> ${state.data.complexInstallDetails}<br>
<strong>Name:</strong> ${state.data.firstName} ${state.data.lastName}<br>
<strong>Email:</strong> ${state.data.userEmail || 'Not provided'}<br>
<strong>Phone:</strong> ${state.data.userPhone || 'Not provided'}<br>
<strong>SMS:</strong> ${state.data.smsOptIn ? 'Yes' : 'No'}<br><br>

<strong>Is everything correct?</strong>
`;
    addMessage(review);
    showButtons([
        { text: "Yes, submit!", action: submitApplication },
        { text: "Edit", action: () => {
            addMessage("Edit", true);
            collectPropertyInfo();
        }}
    ]);
}

function submitApplication() {
    addMessage("Yes, submit!", true);
    addMessage('Submitting your application... <span class="loading"></span>');

    // Here you would send the data to your backend
    console.log('Application data:', state.data);

    setTimeout(() => {
        updateProgress('Complete!', 100);
        addMessage(`<strong>Application submitted!</strong><br><br>

Thank you, ${state.data.firstName}! Your application has been received.<br><br>

<div class="important-box">
<strong>NEXT STEPS:</strong><br>
• You'll receive a confirmation email shortly<br>
• Courtney Kingsbury will review your application<br>
• We'll contact you within 5-7 business days<br><br>

<strong>Questions?</strong><br>
Email: <a href="mailto:cckphx@gmail.com" class="link">cckphx@gmail.com</a><br><br>

Learn more: <a href="https://www.phoenix.gov/administration/departments/heat/heat-response-programs.html" class="link" target="_blank">Phoenix Heat Response Programs</a>
</div>

Thanks for growing green in Phoenix!`);

        showButtons([
            { text: "Submit another address", action: () => {
                addMessage("Submit another address", true);
                location.reload();
            }}
        ]);
    }, 1500);
}

function showFAQ() {
    addMessage(`<strong>Frequently Asked Questions</strong><br><br>

<strong>Q: When will trees be planted?</strong><br>
A: January 24, 2026<br><br>

<strong>Q: How much does it cost?</strong><br>
A: FREE! This program is at no cost to you.<br><br>

<strong>Q: What size trees will I receive?</strong><br>
A: Typically 15-gallon or 25-gallon trees depending on nursery availability. The exact height varies by species—see each tree's details for mature sizes.<br><br>

<strong>Q: Can I pick any tree?</strong><br>
A: You can select up to 2 trees from our approved list based on your property.<br><br>

<strong>Q: What if I'm a renter?</strong><br>
A: You need landlord approval. We provide a template letter.<br><br>

<strong>Q: Front yard only?</strong><br>
A: Yes, this program only covers front yard planting.<br><br>

<strong>Q: What if I have questions?</strong><br>
A: Contact Courtney Kingsbury at <a href="mailto:cckphx@gmail.com" class="link">cckphx@gmail.com</a>`);

    showButtons([
        { text: "Back to menu", action: () => {
            addMessage("Back to menu", true);
            showMainMenu();
        }}
    ]);
}

// Start the conversation
window.onload = () => {
    startWelcome();
};
