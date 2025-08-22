parameters:
  - name: version
    displayName: "Check and install Node.js in selected version"
    type: string

steps:
  - script: |
      if [ "$(node -v | sed -E 's/v([0-9]+)\..*/\1/')" != "${{ parameters.version }}" ]; then
        echo "Installing Node.js ${{ parameters.version }}..."
        sudo dnf module reset -y nodejs
        sudo dnf module install -y nodejs:${{ parameters.version }}/common
        sudo dnf module enable nodejs:${{ parameters.version }}/common
      else
        echo "Node.js version ${{ parameters.version }} is already installed."
      fi
    displayName: "Install Node.js ${{ parameters.version }}"
