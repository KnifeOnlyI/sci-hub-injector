# Sci Hub Injector

Adds SciHub links to popular publisher websites to make accessing science even easier!

Inject freedom into science publisher websites, with style.

Please contribute new websites!

## Usage

* Chrome/Chromium: see instructions below.
* Firefox: https://addons.mozilla.org/en-US/firefox/addon/sci-hub-injector/
* Brave: should work when you replace `chrome://extensions` with `brave://extensions`. Not tested.

## Supported sites

- PubMed
- Nature
- Taylor and Francis
- Elsevier / ScienceDirect
- Eureka Select
- Science
- Wiley
- SpringerLink

## Screenshots

![PubMed Screenshot](.github/pubmed.png)
![Nature Screenshot](.github/nature.png)

## Installation

1. Visit `chrome://extensions` (via omnibox or menu -> Tools -> Extensions).
2. Enable Developer mode by ticking the checkbox in the upper-right corner.
3. Click on the "Load unpacked extension..." button.
4. Select the directory containing your unpacked extension.

Copied from:
https://stackoverflow.com/questions/24577024/install-chrome-extension-form-outside-the-chrome-web-store

## Configuration

You can configure the extension from the source, edit this file `sci-hub-inject.config.js`.
This can be useful for user living in a country where sci hub is blocked (like in France)

## Contributing

1. Add link to `manifest.json`.
2. Add a function to `sci-hub-inject.js`.

   2.1. Extract DOI from website.

   2.2. Add element with link to SciHub to DOM. Use the same classes and structure as the website, for niceness.

3. Add an `else if` clause to the if statement in the `addSciHubLink` function in `sci-hub-inject.js`.
4. Test to make sure it works.

Thanks!

## Journals link for tests

- PubMed : https://pubmed.ncbi.nlm.nih.gov/28673424/
- Nature : https://www.nature.com/articles/144672b0
- Taylor & Francis : https://www.tandfonline.com/doi/abs/10.1080/00220671.1972.10884418
- Elsevier / ScienceDirect : https://www.sciencedirect.com/science/article/abs/pii/S187943781630016X
- Eureka Select :
- Science :
- Wiley : 
- SpringerLink (Article) : https://link.springer.com/article/10.1007/s40278-018-42901-5

## Important legal notice

I don't recommend doing things that go against whatever laws that apply where you are. I condemn illegal activities. This is the user's reponsibility. SciHub is not affiliated in any way with this project.

---

Next, I'll quote a hero of mine, Aaron Swartz:

> [There is no justice in following unjust laws](https://openaccessmanifesto.wordpress.com).
