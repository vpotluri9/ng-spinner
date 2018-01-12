This is a simple overlay spinner for Angular apps.

Installation:

    npm install ng-spinner --save

Set-Up:

    Import SpinnerModule in your app.module.ts file
    import { SpinnerModule } from 'ng-spinner';

    Add SpinnerModule to your imports in app.module.ts file
    imports: [
        BrowserModule,
        SpinnerModule
    ]

    The spinner is based on font-awesome 4.7. So, you need font awesome in your app.

    Install font-awesome
    npm install --save font-awesome

    if your application has styles.css file
        add font-awesome to styles in .angular-cli.json
        "styles": [
            "styles.css",
            "../node_modules/font-awesome/css/font-awesome.css"
        ]

    if your application has styles.scss file
        Create an empty file _variables.scss in src/.
        Add the following to _variables.scss:
        $fa-font-path : '../node_modules/font-awesome/fonts';
        In styles.scss add the following:
        @import 'variables';
        @import '../node_modules/font-awesome/scss/font-awesome';

Usage:

    Tag: <ng-spinner></ng-spinner>

    When you want to start the spinner
        <ng-spinner [display]="true"></ng-spinner>

    When you want to stop the spinner 
        <ng-spinner [display]="false"></ng-spinner> 

If you find any issues, you can report at 
https://github.com/vpotluri9/ng-spinner/issues

Happy Coding :)