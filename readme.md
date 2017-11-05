# Reallery
Reallery is a MobileFirst Framework over ReactJS. Easy configuration. No need for data services. Responsive and very very fast. It's focusing on develop gallery applications.


  View online demo on [demo.reallery.com](http://www.demo.reallery.com/)


# Steps to build your project
1. Clone this repository
1. Npm install
1. Config your project on ./reallery_conf.json
1. Save your images in ./content/<SECTION_KEY_X>/images/
    - Name each folder as the name of the section and put inside the images
1. Npm run create & webpack
1. Config the server and go ahead. Your project is online :)


## Step 3: Config your project
1. Open ./reallery_conf.json
    ```javascript
        {
          "meta": {
            "title": "<WEBPAGE_NAME>",
            "email": "<PUBLIC_EMAIL_WEBPAGE>",
            "tlf": "<PUBLIC_TLF_WEBPAGE>",
            "google_analytics_id": "<GOOGLE_ANALYTICS_ID>",
            "youTubeKey": "<YOUTUBE_ID>",
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
            "google_analytics_id": "<GOOGLE_ANALYTICS_ID>",
            "youTubeKey": "<YOUTUBE_ID>",
            "background": "<FILE_NAME_BACKGROUND_IMAGE>"
          },
          ...
        }

    ```

    - *title:* Here you have to put the name of your project that will appear in the UI
    - *background:* Here you have to put the file name that will be displayed as a home page background. This file has to stay inside:  ./content/background/<"<FILE_NAME_BACKGROUND_IMAGE>
    - *google_analytics_id:* If you have configured an analytics account by google you can put here your ID so you can take track of your site.
    - *youTubeKey:* Key from your youtube account. It's necessary to let the project manege your videos.

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

    - *<SECTION_KEY_X>:* Section key name. This name will be the key that refer to this section in the code and it has to check with the folder name that will contain the images of the section gallery here: ./content/<SECTION_KEY_X>/images/.
    - *name:* Section public name. This name will appear in the UI.
    - *color:* Button color
    - *icon:* Object with two keys: {"family":"", "icon":""}. Select an icon from [react-icons](https://gorangajic.github.io/react-icons/fa.html), select a family and a icon from there.
    - *videos:* Array of strings that correspond to youtube ID videos
    - *articles.en:* Array of strings that are the articles you want to publish in your site
    - *publish:* This has to be equal to true or false value. True publish the section whereas false hide it.


## Step 4: Image files

Create a folder for each section of your gallery inside ./content/<SECTION_KEY_X>/images/. Make sure the name of the folder <SECTION_KEY_X> is the same as the key you put in the Json. Inside this folder you have to copy all the images files.

# Run Example
If you want to run [demo.reallery.com](http://www.demo.reallery.com/) locally it's simple.
1. Switch branch: **git checkout example/mbuonarroti**
1. Run webpack on console
1. Start any server on local finder. As for example http-server npm package or anything else.