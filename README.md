# 🎵 Strudel React Assignment  
A React-based web application built around the **Strudel CC* music library

--- 

## Assignment Video
**Link** :  [Video](https://google.com)

--- 

## Application Features

### **1. Code preprocessor**
This section allows you edit the raw strudel code directly.
This allows you to write and experiment with your own musical creations

### **2. Strudel REPL**
This section allows you to view the live processes version of the strudel code.
Every chanage made through: 

-- Instrument Cards
-- Audio Controls (tempo, gain, etc.)

Will be automatically reflected in this space in real time.
This ensures that whatever your currently hearing, is relevant to the code you're seeing.


### **3. D3 Graph**
A real time graph visualisation made through the D3 library
This displays how the volume (gain) changes in real time as the music plays

---

## Audio Controls

### **Play**
Starts playing the music.

### **Stop**
Stops playing the music.

### **Tempo**
Adjusts the global tempo (cpm) of the music.

### **Volume Slider**
Controls the global gain (volume) of the music.

--- 

## Instrument Controls

You can add or remove instruments cards by either using the blue **+** button or the red **delete** button respectively

Each card includes:

- An instrument name input
- An ON Checkbox (Active)
- A HUSH Checkbox (Muted)

When **HUSH** is enabled, the instrument name in the strudel code is automaitcally muted with a prefixed _ 
This change is applied immediately and can be heard in real time

--- 

## JSON Save / JSON Load

Located in the top left corner of the page, the Save/Load system allows you to save your audio configuration.

### **Save JSON**
- Opens a popup asking for a preset name.
- Saves the current strudel code + instrument card settings.

### **Load JSON**
- Opens a popup listing all saved presets.
- Allows you to load or delete any preset.

This system makes it easy to store presets or reset to previous presets.

---

## Running The Application

### **Requirements**
- Node.js installed

### **Setup Instructions**
1. **Clone the repository**
2. **Install all dependencies** : `npm install`
3. **Start the Server** : `npm start`
4. **Open the page in your browser**: `http://localhost:3000`