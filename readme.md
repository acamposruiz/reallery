# Reallery
Reallery is a MobileFirst Framework over ReactJS. Easy configuration. No need for data services. Responsive and very very fast. It's focusing on develop gallery applications.


  View online demo on [demo.reallery.com](http://www.demo.reallery.com/)


# Steps to build your project
1. Clone this repository
1. Npm install
1. Config your project on ./reallery_conf.json
1. Save your images in ./content/<SECTION_KEY_X>/images/
    - Name each folder as the name of the section and put the images
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
        "videos": [<SECTION_YOUTUBE_IDS_VIDEOS>],
        "articles": [<SECTION_ARTICLES>],
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
    - *background:* Here you have to put the file name that will be displayed as a homepage background. This file has to stay inside:  ./content/background/<"<FILE_NAME_BACKGROUND_IMAGE>
    - *google_analytics_id:* If you have configured an analytics account on google you can put here your ID so you can take track of your site.
    - *youTubeKey:* Key from your youtube account. It's necessary to let the project manage your videos.

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
        "videos": [<SECTION_YOUTUBE_IDS_VIDEOS>],
        "articles": [<SECTION_ARTICLES>],
        "publish": true/false
      },
      "<SECTION_KEY_02>": { ... }
    }

```

    - *<SECTION_KEY_X>:* Section key name. This name will be the key that refers to this section in the code and it has to check with the folder name that will contain the images of the section gallery here: ./content/<SECTION_KEY_X>/images/.
    - *name:* Section public name. This name will appear in the UI.
    - *color:* Button color
    - *icon:* Object with two keys: {"family":"", "icon":""}. Select an icon from [react-icons](https://gorangajic.github.io/react-icons/fa.html), select a family and an icon from there.
    - *videos:* Array of strings that correspond to youtube ID videos
    - *articles:* Array of strings that are the articles you want to publish on your site
    - *publish:* This has to be equal to true or false value. True publish the section whereas false hide it.


## Step 4: Image files

Create a folder for each section of your gallery inside ./content/<SECTION_KEY_X>/images/. Make sure the name of the folder <SECTION_KEY_X> is the same as the key you put in the Json. Inside this folder you have to copy all the images files.

# Run Example
If you want to run [demo.reallery.com](http://www.demo.reallery.com/) locally it's simple.
1. Switch branch: **git checkout example/mbuonarroti**
1. Run webpack on console
1. Start any server on local finder. As for example http-server npm package or anything else.

# Multilanguege Configuration

You can set up your webpage as multilanguage by adding multilanguage configuration in ./reallery_conf.json inside 'meta' section this way:

```javascript
    {
      "meta": {
        [...]
        "languages": {
            "en": "English"
            "ge": "German",
            "es": "Spanish",
        },
        "languageDefault": "en",
        [...]
      },
      ...
    }

```

You have to make sure you have set both *languages* and *languageDefault* configuration.
Once you have set language options inside meta section you have to config the content to make it fit each language. So you have to config  videos and articles content as well as the name of each section in a particular way.
Like this:


```javascript
    {
      ...
      "<SECTION_KEY_01>": {
        [...]
        "name": {
            "en": "<ENGLISH_SECTION_NAME>"
            "ge": "<GERMAN_SECTION_NAME>",
            "es": "<SPANISH_SECTION_NAME>",
        },
        "videos": {
          "en": [<SECTION_YOUTUBE_IDS_VIDEOS>],
          "ge": [<SECTION_YOUTUBE_IDS_VIDEOS>],
          "es": [<SECTION_YOUTUBE_IDS_VIDEOS>]
        },
        "articles": {
            "en": [<SECTION_ARTICLES>],
            "ge": [<SECTION_ARTICLES>],
            "es": [<SECTION_ARTICLES>]
        },
        [...]
      },
      "<SECTION_KEY_02>": { ... }
    }

```


- Now the data type of both *videos* and *articles* are not an array but an object as you may have appreciated.
- Also you have to change the way you name the images folder. So now you need to called each one as *./content/<SECTION_KEY_X>/images_<LANGUAGE_KEY>/*. Where *<LANGUAGE_KEY>* may be something like *en* or *es* or anything that fix with any of the keys declared in *meta.languages*.
- The images inside *./content/<SECTION_KEY_X>/images/* will still be showed in all the languages. So you can keep the common content among all languages in *.../images* and put language-specific content in *.../images_<LANGUAGE_KEY>*

# Multilanguage Philosophy

- The option of setting a modal to easily switching language in your project is coming soon. But now you have to follow another approach to let users navigate among the different languages in your project.
- The default language navigation mode will be the *meta.languageDefault* value in your configuration. And every user will keep this language. So you will have to configure your site to enable different domains extensions that link to each language root, so after the user comes to your site in this language they will keep in it.
- For instance, you can configure your *domain.com* by default so it will enter your site as the default language and then config a *domain.ge* that links to your *domain.com/#/ge* so after the first access the user will keep in the German language.
- If you want to see an example of a multilanguage configuration you can go to *example/mbuonarroti-multilangage* branch by exec with console: *git checkout example / mbuonarroti-multilangage*