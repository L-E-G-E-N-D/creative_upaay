# Creative Upaay - Dashboard Design Task

A full-stack Kanban board dashboard built with React, Vite, Redux Toolkit, and Tailwind CSS. This project is a pixel-perfect replication of the provided Figma design, featuring drag-and-drop task management, a responsive layout, and persistent local storage.

## Live Demo & Code
* **Live Deployment:** [https://L-E-G-E-N-D.github.io/creative_upaay](https://L-E-G-E-N-D.github.io/creative_upaay)
* **Code Repository:** [https://github.com/L-E-G-E-N-D/creative_upaay](https://github.com/L-E-G-E-N-D/creative_upaay)

## Video Demonstration
![Kanban Board Demonstration](./creative_upaay.mov)

## Features
- **Kanban Board:** Drag and drop tasks between "To Do", "In Progress", and "Done" columns.
- **Task Management:** Create new tasks with title, description, and priority level.
- **Priority Filtering:** Filter the board to show all tasks or only tasks of a specific priority (High, Medium, Low).
- **Global Search:** Search for tasks by title or description using the top navigation bar.
- **Extended Details:** View task details, comments, and files via custom modals.
- **Persistent State:** Uses Redux combined with Local Storage to ensure all your tasks, search queries, filters, and active projects remain exactly as you left them upon page refresh.
- **Dynamic Projects:** Switch between different custom projects in the sidebar.

## Technologies Used
- React (Vite)
- Tailwind CSS (v3)
- Redux Toolkit (State Management)
- `@hello-pangea/dnd` (Drag and Drop)
- Lucide React (Icons)

## Approach & Assumptions
1. **State Management:** I chose Redux Toolkit paired with a Local Storage subscriber. This keeps the state logic centralized while guaranteeing persistence without needing a real backend database. The Redux slice (`tasksSlice.js`) handles all complex logic, like reordering arrays during a drag-and-drop event.
2. **UI/UX Replicability:** Instead of generic Tailwind configurations, I strictly adhered to the colors, typography, spacing, and component variants present in the provided Figma design to achieve a 1:1 match. 
3. **Simplicity:** The project avoids over-engineering. It uses basic functional React components structured logically (`src/components`, `src/pages`, `src/redux`). No unnecessary custom hooks or context providers were used where Redux sufficed.
4. **Mocked Data:** Avatars, file attachments, and comments are simulated dynamically in the UI to match the design's "busy" feel, though the framework is built in Redux to eventually accept real user data.

## Getting Started Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation Run Guide

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd creative_upaay
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the provided local URL (usually `http://localhost:5173`).
