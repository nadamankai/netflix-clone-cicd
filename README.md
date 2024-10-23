## Building Netflix from Scratch Using React (Custom Hooks, Context, Portals), Firebase, Compound & Styled Components (10 Hour Tutorial Here: https://www.youtube.com/watch?v=x_EEwGe-a9o)

This application (a Netflix clone) was built using React (Custom Hooks, Context), Firebase & Styled Components. I have built the following pages within this application: sign in, sign up, browse & lastly the homepage. There are four different pages, some using protected routes with auth listeners. Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.

I used compound components (just a design pattern) to build my components, and there's over 10 examples as to how these are used. The styling is all handled via styled components. Using compound components made my actual dumb components really easy to test.

Subscribe to my YouTube channel here: http://bit.ly/CognitiveSurge where I build projects like this! And don't forget, you can contribute to this project (highly encouraged!).

![Preview](netflix-preview.png?raw=true)

## Testing & CI/CD

This Netflix clone uses Jest for unit testing with custom hooks, context, and Firebase integration. Tests are automatically run on every pull request using GitHub Actions. The coverage is set to ensure at least 90% on branches, functions, lines, and statements.


For the **CI**, the app is built and tested using GitHub Actions. The tests are run on every pull request, and the coverage is checked to ensure it meets the minimum threshold. The app is also scanned for vulnerabilities using Snyk, and the results are posted as a comment on the pull request. The app is also scanned for code smells and bugs using SonarQube, and the results are posted as a comment on the pull request.

For the **CD**, the app is built and deployed using GitHub Packages. A Docker image is automatically built and pushed on each commit to the main branch, streamlining deployment and versioning.


Contributions and improvements are welcome!
