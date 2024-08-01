![Results page](sudokusolver/screen.png "AI Bot Answering Sudoku Questions")

# Project Purpose and Goal

**The purpose of my Sudoku Solver project was to explore and learn different technologies while working on a Pix2Struct model from Google.** This model, initially designed to generate HTML code from website screenshots, intrigued me with its potential for transfer learning. I aimed to adapt this model to detect numbers in Sudoku puzzle images, outputting the recognized digits and marking blank spaces with zeros.

This project provided a comprehensive learning experience, allowing me to delve into advanced machine learning techniques and explore the practical applications of transfer learning. By the end of the project, I had not only developed a functional Sudoku solver but also gained valuable insights into the adaptability of cutting-edge AI models for diverse tasks.

# Web Stack and Explanation

For the Sudoku Solver project, **I utilized Google's Pix2Struct model**, originally designed for HTML generation from screenshots, to recognize and process numbers in Sudoku puzzle images. **Docker was employed for containerization**, ensuring a consistent development and deployment environment. **FastAPI handled efficient API requests**, enabling real-time communication between the solver and the user interface.

I **developed a Telegram bot for user interaction**, processing Sudoku puzzle images, and returning solved puzzles. This involved setting up a robust pipeline for image preprocessing, model inference, and post-processing.

The project was designed with scalability and modularity in mind, allowing for easy future enhancements and extensions. **This approach not only resulted in a functional Sudoku solver but also provided valuable experience in applying state-of-the-art AI models to practical applications.**

# Problems and Thought Process

**The initial idea for the project was to create code to learn the sets method in Java and use Spring Boot to create an API, with a React website for the front end.** This first attempt was successful, but feedback from family and friends highlighted a significant usability issue: no one wanted to enter each Sudoku number manually and then ask the website to solve it. They desired a more streamlined method.

This feedback **led me to build an AI Chat Bot model capable of analyzing an image of a Sudoku puzzle**, extracting the numbers, and solving the puzzle. A year after the first attempt, I decided to incorporate a Telegram bot to serve as the user interface, allowing users to interact with the AI model seamlessly.

For the AI model, I chose **Google's Pix2Struct**, initially trained to generate HTML code from website screenshots. Adapting this model to recognize Sudoku numbers required transfer learning, which posed challenges due to the need for a suitable dataset. I found a relevant dataset on Kaggle, but it required significant preprocessing to fit my use case. I wrote custom preprocessing code to edit all the output files appropriately.

**The current version of the project uses Telegram as the user interface, enabling users to interact with the AI model efficiently.** This approach addressed the usability issues and provided an engaging and intuitive way to solve Sudoku puzzles.

# Lessons Learned

Through the development of the Sudoku Solver project, I gained several valuable insights and skills:

1. **User Feedback is Crucial:** The initial approach highlighted the importance of user-centric design. Feedback from family and friends guided me to pivot from a manual input method to an AI-based image recognition solution, significantly enhancing usability.
2. **Adapting Existing Models:** Adapting Google’s Pix2Struct model for a new use case taught me the complexities of transfer learning. This involved understanding the original model’s capabilities and finding creative ways to repurpose it for Sudoku puzzle recognition.
3. **Dataset Preparation:** Finding and preparing the right dataset is critical. The Kaggle dataset required extensive preprocessing to fit the specific needs of my project, underscoring the importance of data preparation in machine learning.
4. **Integration of Technologies:** Combining various technologies like Spring Boot, React, Docker, and FastAPI in the initial phases and then transitioning to using a Telegram bot for user interaction showcased the importance of integrating different tech stacks to build a cohesive solution.
5. **Continuous Learning and Adaptation:** The project evolved over time, reflecting the need for continuous learning and adaptation. From building a simple web interface to developing a sophisticated AI model and Telegram bot, each step required learning new skills and applying them effectively.