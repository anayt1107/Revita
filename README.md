# Revita

## What Does Revita Do?

Revita is an AI-powered mobile application that makes recycling and waste management easier and more accessible. Users can simply point their phone's camera at a piece of trash, and the app instantly identifies the object using computer vision technology. It then uses a classification AI model to determine whether the item should be recycled, composted, or disposed of in landfill. By gamifying the waste disposal process and providing instant feedback, Revita aims to eliminate the apathetic mindset many people have towards proper trash disposal and inspire a more sustainable community.

## Core Features

- **Real-Time Object Recognition**: Scan trash items with your camera to receive instant AI identification
- **Smart Classification**: Dual AI system identifies waste type AND determines proper disposal method (recycle/compost/landfill)
- **User Profiles**: Create personal profiles to track your waste management impact
- **Community Engagement**: Join the eco-conscious community and compete with others
- **Progress Tracking**: View statistics and achievements from your recycling efforts
- **Educational Insights**: Learn why items are classified certain ways and best disposal practices

## What Inspired Revita?

Our school campus faced a significant waste problem. Despite having hundreds of students, most trash—including recyclable materials—was being discarded indiscriminately. When we discovered that the school was combining all waste due to time and cost constraints, we realized that students could make a direct impact by taking personal responsibility for sorting their own trash. We created Revita as a game-like solution to educate and incentivize individuals to properly sort waste, making it easier for institutions like schools to implement effective recycling programs. By removing the friction and providing instant feedback, we believe users will develop sustainable habits that extend far beyond the classroom.

## Technical Challenges Overcome

During development, we faced several significant obstacles:

1. **Machine Learning Integration**: Building and training accurate AI models for diverse waste object recognition required extensive data collection and model optimization to handle real-world conditions and lighting variations.

2. **API Integration with React Native**: Our team had no prior experience integrating backend APIs with React Native. We overcame this through dedicated research, YouTube tutorials, StackOverflow deep dives, and daily team meetings to troubleshoot integration issues.

3. **Frontend-Backend Collaboration**: Splitting development between frontend and backend teams meant navigating unfamiliar languages and frameworks during integration. We persevered through trial-and-error, effective communication, and continuous problem-solving.

4. **Cross-Platform Compatibility**: Ensuring consistent performance across iOS and Android required careful testing and optimization.

Through persistence, collaboration, and willingness to ask for help, we successfully integrated all components and created a fully functional application.

## Technology Stack

- **Frontend Framework**: React Native with Expo
- **Language**: TypeScript (92%) + JavaScript (8%)
- **Routing**: Expo Router (file-based routing)
- **State Management**: React Query
- **Styling**: Tailwind CSS via NativeWind
- **Database**: Expo SQLite + Appwrite
- **HTTP Client**: Axios
- **AI/ML**: TensorFlow.js for object recognition and classification models
- **UI Components**: React Native Paper, Lucide icons
- **Animations**: React Reanimated

## Installation Instructions

To install and run Revita locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/anayt1107/Revita.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Revita/ecofront
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   npx expo start
   ```

5. Open in an emulator or Expo Go app on your mobile device

## Usage

1. Launch the Revita app
2. Point your camera at a piece of trash
3. The app will identify the object and classify it
4. Receive instant feedback on the correct disposal method
5. Track your progress and compete with other users in the community

## Development Setup

For developers looking to contribute:

1. Ensure you have Node.js (v18+) and npm installed
2. Install Expo CLI globally:
   ```bash
   npm install -g expo-cli
   ```
3. Clone the repository and install dependencies as shown above
4. Follow the contribution guidelines below

## Improvements Planned for Revita 2.0

We have an ambitious vision for enhancing Revita:

- **Avatar Customization**: Allow users to personalize their profiles with custom avatars and achievements
- **Real-Time Classification**: Skip the photo step entirely—live camera feed detection with instant classification
- **Multiple Object Recognition**: Identify multiple items in a single scan
- **Eco Teams & Competition**: Form friend groups to compete in recycling challenges and leaderboards
- **Social Media Integration**: Share progress and achievements on Instagram and TikTok to spread awareness
- **Local Events Integration**: Connect with nearby trash collection events and environmental initiatives
- **Partnerships & Rewards**: Collaborate with waste management organizations to offer incentives and tangible rewards for recycling milestones

## Contribution Guidelines

We welcome contributions! Please adhere to the following guidelines:

- Fork the repository and create a new branch for your feature/bug fix
- Follow the existing code style and TypeScript conventions
- Test your changes thoroughly before submitting
- Submit a pull request with a clear description of your changes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.