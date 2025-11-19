# SeeSense — AI Vision Assistant for the Blind and Low-Vision Community

## Overview

SeeSense is a browser-based, voice-controlled AI assistant designed to help blind and low-vision users understand their surroundings using only a laptop or phone camera.
Unlike typical computer vision tools, SeeSense is built with an accessibility-first approach: the user never needs to rely on sight, click tiny buttons, or manually crop images.
The experience is entirely guided through speech and audio feedback.

SeeSense allows users to:

* Describe their environment
* Read text from physical objects (menus, signs, labels, documents)
* Identify objects in view
* Operate the application hands-free through voice commands

This project was built for Horizon Hacks 2025 under the theme: **AI for Accessibility and Equity**.

---

## Problem Statement

285 million people worldwide live with visual impairments. Everyday tasks such as reading a restaurant menu, identifying medication, or simply understanding what is around them often require the assistance of another person.
Most technologies built for blind users are expensive, require special hardware, or are not intuitive for people with limited technical experience.

There is a clear need for:

* A low-cost solution
* That runs entirely on existing devices
* Without requiring installation
* With a simple, voice-first interaction model
* And reliable AI scene understanding

SeeSense addresses all of these needs in a single web application.

---

## What SeeSense Does

**1. Scene Description**
Users point their device in any direction. When they say “Describe,” SeeSense captures the current frame and explains the environment in clear, structured language.

**2. Text Reading**
Users say “Read text,” and the system extracts and speaks aloud any printed text visible in the camera frame, including menus, signs, product labels, or documents.

**3. Object Identification**
Users say “Identify object,” and SeeSense names the primary object in view and provides any relevant details such as color, size, shape, or printed information.

**4. Voice-First Interaction**
The user never needs to press a button.
The system continuously listens for simple commands:

* “Describe”
* “Read text”
* “Identify object”
* “Stop”

Everything is spoken aloud automatically.

---

## Key Features

* Voice-controlled, hands-free operation
* High-contrast, minimal interface for accessibility
* AI-generated scene descriptions using vision models
* AI-powered text extraction and speech output
* Works directly in the browser
* No installation required
* Keyboard shortcuts for low-vision users
* Designed to be used by non-technical audiences

---

## How It Works

1. The browser’s `getUserMedia` API provides a live camera feed.
2. When the user gives a voice command, the system captures a single frame.
3. The image is sent to an AI vision model for analysis.
4. The response is spoken aloud using the Web Speech API.
5. A text transcript is displayed for sighted helpers and judges.

Unlike real-time video analysis, SeeSense processes only one frame at a time to optimize speed, cost, and accessibility.

---

## Why This Matters

Blind and low-vision individuals often rely on expensive or specialized devices. SeeSense demonstrates that meaningful accessibility tools can be built with everyday technology that users already own.
It promotes independence, dignity, and equal access to information by leveraging AI in a responsible, user-centered way.

---

## Tech Stack

**Frontend:**
HTML, CSS, JavaScript
Optional: React or any framework (not required)

**AI:**
Anthropic Claude Vision API (or any multi-modal LLM)
OCR via AI model prompt
Natural language generation via AI model

**Browser APIs:**

* Web Speech API (text-to-speech)
* Web Speech Recognition (voice commands)
* MediaDevices getUserMedia (camera access)

**Hosting:**
Netlify / Vercel / GitHub Pages

---

## How to Use

1. Open the SeeSense web page.
2. Allow camera and microphone permissions.
3. Wait for the system to speak the welcome message.
4. Use your voice to say:

   * “Describe”
   * “Read text”
   * “Identify object”
5. The system captures the current frame and speaks the results aloud.
6. Say “Stop” to interrupt reading at any time.

A fallback set of large, high-contrast buttons is available for sighted helpers.

---

## Accessibility Design Choices

SeeSense is intentionally built to be usable without sight:

* Voice-first interaction
* Automatic audio narration
* No visual menus or complex UI
* High-contrast design for low-vision users
* Large interaction targets
* Minimal cognitive load
* Clean single-page interface
* No multi-step workflows or modal popups

Every design decision was guided by the question:
“Can this be used fully without looking at the screen?”

---

## Limitations

* Not intended as a medical device
* Works best in good lighting
* Not a replacement for human assistance in critical situations
* Internet connection required
* Real-time continuous video analysis is not supported for cost and performance reasons

---

## Future Improvements

* Mobile app version for faster processing
* Real-time edge-based scene understanding
* Continuous guidance mode
* Navigation assistance with spatial audio
* Offline on-device vision models
* Integration with wearables
* Specialized modes for medication scanning and object tracking

---

## Team

Built by Hannah Janawa
Track: Assistive Technology / Accessibility
