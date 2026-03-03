# Disci-app 
## Lab 4: Intro to JavaScript

Disci-app is an interactive web application designed to foster discipline through gamification elements, rewards, and habit mission tracking. 

###Mechanics
* Mision System: Users can register habits by assigning them a name, description, and difficulty level.
* XP Accumulation: Each difficulty level grants a specific amount of experience: Easy (10 XP), Normal (25 XP), and Hard (50 XP).
* Ranking System: Depending on the total XP, the user scales through the following categories:
    * Novice: Less than 50 XP.
    * Wizard: 50 XP or more.
    * Sorcerer: 150 XP or more.
###How to use
1. Add a mission: The system validates the structure by sending a console.log with the mission data.
2. View missions: Missions are displayed in a list at the bottom of the interface.
3. Complete a mission: Mark the mission as finished; its status will change to "SUCCESSFUL", adding points to your total and allowing you to level up.

### Folder Structure
/var/www/html/
├── html/
│   └── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── README.md
└── .gitignore

### Prerequisites
- NGINX web server installed
- WSL (Windows Subsystem for Linux) or a Unix terminal
- Basic terminal knowledge

### Installation Steps

#### 1. Clone or Download the Repository
#### 2. Copy Files to NGINX Directory
```bash
sudo chown -R $USER:$USER /var/www/html

cp -r * /var/www/html/

ls -la /var/www/html/
```

#### 3. Start NGINX
```bash
sudo systemctl start nginx

sudo systemctl status nginx

sudo systemctl enable nginx
```

#### 4. Access the Game through your local host 
http://localhost/html/index.html

### Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **NGINX**

### Credits
* Developed by: Enya Gálvez - 24693
* Date: March 02, 2026
* Typography (Google Fonts):
    * Twinkle Star: Used for the main title (h1).
    * EB Garamond: Used for section headers (h2, h3).
    * Karla: Used for body text and general UI.
* **Course**: Web Systems and Technologies
* **Institution**: Universidad del Valle de Guatemala
* **Instructor**: Marlon Fuentes



