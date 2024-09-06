<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scheduling Logo</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            position: relative;
            overflow: hidden;
        }
        
        .logo-container {
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .logo-container .circle {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: linear-gradient(135deg, #ff6f61, #de1f7a); /* Gradient color */
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
            animation: bounce 2s infinite;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            font-weight: bold;
        }

        .logo-container h1 {
            font-size: 24px;
            margin-top: 20px;
            color: #333;
            animation: fadeIn 3s ease-in-out;
        }

        /* Animation keyframes */
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>
<body>
    <div class="logo-container">
        <!-- Colored circle to replace the image -->
        <div class="circle">Logo</div>
        <h1>Schedule Your Tasks</h1>
    </div>
</body>
</html>
