# React Native

## getting started with react native [READ:](https://facebook.github.io/react-native/docs/getting-started)

- Name three Core Components of React Native and describe what they do.

  - `<View>`: A container that supports layout with flexbox, style, some touch handling, and accessibility controls
  - `<Text>`: Displays, styles, and nests strings of text and even handles touch events
  - `<Image>`: Displays different types of images

- What problem does React Native solve (why call it native)?

It solves the issue of conversion to different sizes (you might use a phone or tablet) and also to correlate closely to the native language according to whichever operating system.

- What are the building blocks of a React Native app? How does that compare to a React app?

The building blocks of React native app are text, view, text input, scroll view, stylesheets, buttons, switch and list views.

## expo [READ](https://expo.io/)

- What solution does expo provide?

It's a bundle of tools created around React Native to help you start an app very fast. It provides you with a list of tools that simplify the creation and testing of React Native app. It equips you with the components of the user interface and services.

- Expo tries to manage as much of the complexity of building apps as possible, which is why we call it the managed workflow.

- What is the difference between React Native and Expo? [SOURCE:](https://fulcrum.rocks/blog/react-native-init-vs-expo#:~:text=FAQ%3A%20Expo%20vs%20React%20Native,-What%20is%20Expo&text=Expo%20is%20a%20bundle%20of,the%20user%20interface%20and%20services.)

You can use Expo for development MVP projects. It allows us to provide you with a working product very fast. You can make the app scalable and add extra features and continue working with the app. The main advantage of using React Native is that you can share code between iOS and Android.

## expo snack [READ](https://expo.dev/)

- Checkout this tool. What does snack allow you to do?

It dynamically bundles and compiles code and runs it in the Expo Client or in a web-player.

## ejecting [READ](https://docs.expo.io/versions/latest/expokit/eject)

- Expo allows you to eject your pure-JS project from the Expo iOS/Android clients, providing you with native projects that can be opened and built with Xcode and Android Studio. Those projects will have dependencies on ExpoKit, so everything you already built will keep working as it did before.

- When should you not eject?

If you are uncomfortable writing native code. Ejected apps will require you to manage Xcode and Android Studio projects.

- Why might you choose to eject?

If your Expo project needs a native module that Expo doesn't currently support. We're always expanding the Expo SDK, so we hope this is never the case. But it happens, especially if your app has very specific and uncommon native demands.
