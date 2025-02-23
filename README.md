# SmartBin

SmartBin is an innovative web application designed to facilitate waste management and recycling through technology. The platform allows users to report garbage locations, sell recyclable products, and contribute to a cleaner environment.

## Features

- **Garbage Reporting**: Users can upload images of garbage along with their location, which is then forwarded to the nearest municipal authority.
- **Recyclable Product Marketplace**: Users can sell recyclable items and earn money.
- **User Authentication**: Secure sign-in and sign-up functionality.
- **Dashboard**: Users can track their contributions and transactions.
- **Reverse Geocoding**: Automatically fetches the user's location using OpenStreetMap's Nominatim service.
- **Notifications**: Users receive updates on request acceptance and completion.
- **Map Integration**: Displays nearby recycling centers and authorities.
- **Feedback System**: Users can provide ratings and reviews on cleanliness efforts.
- **Reward System**: Badges and incentives for active contributors.
- **Payment Gateway**: Enables donations and payments for recycled items.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **APIs**: OpenStreetMap (Nominatim), Nodemailer (for emails)
- **Authentication**: JWT-based authentication
- **Cloud Storage**: Multer for image uploads

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- Git

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/smartbin.git
   cd smartbin
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```
4. Start the server:
   ```sh
   npm start
   ```

## Usage
1. Sign up and log in.
2. Upload images of garbage locations or recyclable items.
3. View reports and track submissions on your dashboard.
4. Get notified when requests are processed.
5. Earn rewards and contribute to a cleaner environment!

## Contribution
We welcome contributions! Feel free to submit pull requests or report issues.

## License
This project is open-source and available under the MIT License.

## Demo Video
Watch the demo video here:
[![SmartBin Demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)


