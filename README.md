# Chat Interface - Next.js & Tailwind CSS

## Project Overview:

This is a modern and responsive chat interface built using **Next.js** and **Tailwind CSS**. The application is designed to allow users to manage direct messages, view customer profiles, and use smart response features efficiently. The user interface is clean, minimal, and highly interactive with quick access to customer details, including revenue, web visits, and recent purchases.

## Features:

- **Real-time Chat Interface**: A direct messaging system with user-friendly message bubbles.
- **Smart Responses**: AI-driven suggestions for quick responses in chats.
- **Customer Profiles**: View customer details such as revenue, web visits, orders, and contact information.
- **User Actions**: Call, email, and message buttons for easy communication.
- **Segment Management**: Sidebar to manage customer segments and tags.
- **Responsive Design**: Fully responsive interface, optimized for both desktop and mobile views.

## Technologies Used:

- **Next.js**: A React framework for building server-rendered React applications.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **React.js**: A JavaScript library for building user interfaces.
- **shadcn UI**: (Optional) For creating accessible components.
- **Heroicons**: For beautifully crafted SVG icons.

## Project Setup:

To set up and run the project locally, follow the steps below.

### Prerequisites:

- **Node.js** (version >= 14)
- **npm** or **yarn** package manager

### Installation:

1. **Clone the repository:**
   
   git clone https://github.com/your-username/chat-interface-nextjs-tailwind.git

Navigate into the project directory:

cd chat-interface-nextjs-tailwind

a. Install the dependencies:

npm install
or
yarn install

b. Running the Development Server:
To start the development server, run:

npm run dev
or
yarn dev

Open http://localhost:3000 to view the project in your browser. The page will automatically reload if you make changes to the code.

c. Building for Production:
To create an optimized production build, run:

npm run build
or
yarn build

This will create an optimized version of the application in the .next folder. You can then start the production server by running:

npm start
or
yarn start


Folder Structure:

├── components
│   ├── ChatBox.js          # Chat message UI component
│   ├── Sidebar.js          # Sidebar for segments, actions
│   ├── UserProfile.js      # Customer profile display component
├── pages
│   ├── index.js            # Main chat page
│   ├── api
│   │   └── users.js        # API routes for fetching customer data
├── public
│   └── icons               # Icons used in the project
├── styles
│   └── globals.css         # Global styles
├── .gitignore
├── tailwind.config.js       # Tailwind configuration
├── README.md
└── package.json

Customization:
Tailwind CSS Configuration

You can customize the Tailwind configuration by editing the tailwind.config.js file. Update the color palette, fonts, and more to suit your design needs.

Environment Variables:
To connect with external APIs or services, add your environment variables to a .env.local file in the root of your project:

NEXT_PUBLIC_API_URL=<your-api-url>
NEXT_PUBLIC_API_KEY=<your-api-key>

License:
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements:
Next.js Documentation
Tailwind CSS Documentation
Heroicons

Developed by
Name - Ashvani Singh - https://github.com/ASHVAMI?tab=repositories
