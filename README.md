# Morpheus : A Neural Network Visualizer

!This project aims to provide an interactive, real-time visualization of neural network architectures using Raylib in C, compiled to WebAssembly (WASM) for seamless browser integration. The visualizer is designed to be an open-source tool that can render various neural network structures with clear, interactive features.

## Features

- **Interactive Visualization:** View and interact with neural network architectures directly in your browser.
- **Real-Time Rendering:** Leveraging WebAssembly for fast, real-time performance.
- **Customizable Layout:** Adjustable settings for screen dimensions, node sizes, and more.
- **Polished Design:** Professional and clean visual representation of neural networks.
- **Open Source:** Fully open-source codebase for community contributions and improvements.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Raylib](https://www.raylib.com/): A simple and easy-to-use C library for game development.
- [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html): Required for compiling C code to WebAssembly.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/neural-network-visualizer.git
   cd neural-network-visualizer
   ```

2. **Install Raylib and Emscripten SDK:**

   Follow the instructions on the respective websites to install Raylib and Emscripten SDK.

3. **Build the project:**

   Navigate to the project directory and compile the code using Emscripten:

   ```bash
   emcc -o index.html src/main.c -lraylib -s USE_WEBGL2=1 -s WASM=1
   ```

`This section will be updated soon`

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes and push to your branch.
4. Submit a pull request describing your changes.

For more details on contributing, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
