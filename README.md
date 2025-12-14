# Mirror_Button
Its the mirror button by the using the html css and js.

Mirror Button: Bridging the Physical & Digital
A high-end, interactive UI component that transforms a live webcam feed into a dynamic, glassy "material" for web interfaces.

🚀 How It Works (For Everyone)
Imagine a physical button made of polished glass that reflects your image as you lean in. The Mirror Button creates this effect digitally. Instead of a static color, the button uses your camera to "see" you, applying artistic filters to turn the video into a textured background that moves when you hover over it.

Core Features
Live Reflection: Uses your webcam as the button's "skin."

Depth Perception: The background shifts as your mouse moves (Parallax).

Glass Aesthetics: A pill-shaped design with light glares and beveled edges.

🛠 The Tech Stack
HTML5 Media API: Captures the raw video stream from your device securely.

CSS Compositing: Applies "Contrast" and "Saturation" filters to blend the video into the UI.

JS Parallax Logic: Calculates mouse position to move the background, creating a 3D effect.

CSS Masking: Shapes the video feed into a smooth, pill-shaped glass container.

📖 Implementation Guide
Structure (HTML): The button contains a hidden video element and a text label. The video is wrapped in a container that allows it to move independently for the depth effect.

Styling (CSS): We apply overflow: hidden to the button to ensure the video stays inside the pill shape. Filters are used to make the video look like a premium material rather than just a standard camera feed.

Logic (JavaScript): The script asks for camera access via getUserMedia and tracks your cursor to shift the video container.

🔒 Privacy & Requirements
HTTPS Required: For security, browsers only allow camera access on secure websites.

Privacy First: The video feed is processed entirely in your browser; no data is recorded or sent to a server.