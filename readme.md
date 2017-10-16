# Reallery
Framework to easy create your own gallery webpage just with a JSON file configuration. Made with ReactJS. You can put images, videos and texts. Fast, elegant, responsive.


  View online Example on [reallery.com](http://www.reallery.com/)


# Steps to build your project
1. Clone the project
1. Npm install
1. Config project and each section in the JSON site configuration file: ./model_conf.json
    - Fill in the metadata project info: email, tlf, title (project name) and background file name (this file has to be located in: ./content/background/"<FILE_NAME_BACKGROUND_IMAGE>)
    - Each section has a name, color, icon, videos (on youtube), texts, etc. All this just in the JSON configuration file.
1. Create a folder for each section of your gallery inside ./content
    - Name eah folder as the name of the section and put inside its images
1. Npm run create && webpack
1. Config the server and go ahead. Your project is online :)


## Step 3: Config your project
1. Open ./model_conf.json
    ```javascript
        {
          "meta": {
            "title": "<WEBPAGE_NAME>",
            "email": "<PUBLIC_EMAIL_WEBPAGE>",
            "tlf": "<PUBLIC_TLF_WEBPAGE>",
            "background": "<FILE_NAME_BACKGROUND_IMAGE>"
          },
          "<SECTION_KEY_01>": {
            "name": "<SECTION_NAME>",
            "color": "<SECTION_COLOR>",
            "icon": {
              "family": "<SECTION_ICON_FAMILY>",
              "icon": "<SECTION_ICON_NAME>"
            },
            "videos": {
              "en": [<SECTION_YOUTUBE_IDS_VIDEOS>]
            },
            "articles": {
              "en": [<SECTION_ARTICLES>]
              },
            "publish": true/false
          },
          "<SECTION_KEY_02>": { ... }
        }

    ```

1. Fill metadata general project configuration
    ```javascript
        {
          "meta": {
            "title": "<WEBPAGE_NAME>",
            "email": "<PUBLIC_EMAIL_WEBPAGE>",
            "tlf": "<PUBLIC_TLF_WEBPAGE>",
            "background": "<FILE_NAME_BACKGROUND_IMAGE>"
          },
          ...
        }

    ```

    - *title:* Here you put the web page main title will appear in the main head display
    - *background:* Here you put the file name that will be displayed as a home page background. This file has to stay:  ./content/background/<"<FILE_NAME_BACKGROUND_IMAGE>

1. Edit sections configuration

    ```javascript
                {
                  ...
                  "<SECTION_KEY_01>": {
                    "name": "<SECTION_NAME>",
                    "color": "<SECTION_COLOR>",
                    "icon": {
                      "family": "<SECTION_ICON_FAMILY>",
                      "icon": "<SECTION_ICON_NAME>"
                    },
                    "videos": {
                      "en": [<SECTION_YOUTUBE_IDS_VIDEOS>]
                    },
                    "articles": {
                      "en": [<SECTION_ARTICLES>]
                      },
                    "publish": true/false
                  },
                  "<SECTION_KEY_02>": { ... }
                }

    ```

    - *<SECTION_KEY_X>:* Here you put this section key name. This name will be the key that refer to this section and it has to check with the folder name that will contain the images of the section gallery here: ./content/<SECTION_KEY_X>/images/.
    - *name:* Here you put this section name. This name will appear in each button that link to this section.
    - *color:* Color in the section styles
    - *icon:* Select an icon from [react-icons](https://gorangajic.github.io/react-icons/fa.html), select a family and a icon from there.
    - *videos:* Array of strings equal to youtube ID videos
    - *articles.en:* Array of strings that are the articles yout want to publish in your site
    - *publish:* This has to be set as true or false value. True publish the section whereas false hide it.


## Step 4: Image files

Create a folder for each section of your gallery inside ./content/<SECTION_KEY_X>/images/. Inside this folder you have to copy all the images files.

# Run Example
If you want to run [reallery.com](http://www.reallery.com/) locally it's simple.
1. Switch branch: **git checkout example/mbuonarroti**
1. Run webpack on console
1. Start any server on local finder. As for example http-server npm package or anything else.