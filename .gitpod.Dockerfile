FROM gitpod/workspace-full-vnc:latest

USER root
# package
RUN apt update && apt -y install gdebi-core wget && \
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    gdebi google-chrome-stable_current_amd64.deb
  
# express
RUN npm install puppeteer
