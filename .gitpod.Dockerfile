FROM gitpod/workspace-full

USER gitpod

RUN sudo apt-get update -qq \
    && sudo apt-get install -yq \
        gdebi-core \
        wget \
        libnss3 \
    && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
    && gdebi google-chrome-stable_current_amd64.deb
 
RUN npm install puppeteer
