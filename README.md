### 1\. Cloning the project
````markdown
# Next.js Application with RTK Query & Framer Motion

This is a modern web application built with **Next.js**, focused on efficient state management, smooth animations, and a decoupled frontend/backend architecture.

## 🚀 Quick Start

Follow these steps to get the project running locally.

### Clone and Install Dependencies

git clone <your-repo-url>
cd <project-directory>
npm install
````

### 2\. Set Up the Mock Backend

The project uses `json-server` to simulate a REST API. In a separate terminal window, run:

```bash
npx json-server --watch db.json --port 3001
```

*Note: The backend must be running on **port 3001** for the RTK Query hooks to fetch data correctly.*

### 3\. Start the Frontend

In your main terminal, start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to view the application.

-----

## 🛠 Tech Stack & Implementation Details

### **Frontend Framework**

  - **Next.js:** Bootstrapped using `create-next-app` with the App Router.
  - **Tailwind CSS:** Used for responsive styling.
      - *Note:* The `!` (important) modifier is used in specific instances to ensure utility classes override base configurations where necessary.

### **State Management**

  - **RTK Query (Redux Toolkit):** - Handles all API logic including caching, fetching, and refetching.
      - Implements **Tags** (e.g., `providesTags`, `invalidatesTags`) to automate data synchronization after mutations.
      - Utilizes built-in `isLoading`, `isError`, and `data` states to eliminate manual state handling.
  - **Context API:** Used globally to share and manage user state (data) across all child components, ensuring data integrity throughout the app.

### **UI & Experience**

  - **Framer Motion:** Powering all animated elements, including fluid entry transitions and interactive feedback.
  - **Interactivity:** Customized handling for hovering states, active navigation elements, and button feedback.

### **Data Architecture**

  - **JSON Server:** A dummy backend server utilizing `db.json` for rapid prototyping and testing CRUD operations.

-----

## 📁 Project Structure

  - `/app`: Next.js pages, layouts, and routing logic.
  - `/context`: React Context providers for global user state.
  - `/store`: Redux Toolkit store and RTK Query service definitions.
  - `db.json`: The mock database for the backend server.

## Learn More

To learn more about the core technologies used here:

  - [Next.js Documentation](https://nextjs.org/docs)
  - [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview)
  - [Framer Motion API](https://www.framer.com/motion/)
