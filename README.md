# ion2Menu

----
ion2 Menu is a beautiful, easily customisable sidemenu for ionic2. Its a unique alternative to all other sidemenus, that will make your app really standout.

    ionic view code: f8bcfd65

## Customizability
The component is very easy to customize. Its built with SASS so changing theme colour is as easy as changing one base value.

### Colours:
> In your variable.scss file. Change $menu-o: #6159e4; to the colour of your choice and SASS will take care of the rest.

### Layout:
> The layout itself is very easy to customize. It's built using the official ionic grid. So modifying sizes are as easy as changing a width attribute

see [ionic grid](https://ionicframework.com/docs/v2/components/#grid)

### Control
> Everything is built with HTML and SASS so you are not limited to any plugin options (there are none). So you can use the component however you see fit.

### Extras
> Currently, the menu is opened by default. This can be overridden by removing / commenting out the code responsible in Page1.ts
    
    ionViewWillLoad() {
     this.menuCtrl.open();
    }

The ionViewWillLoad event fires before the page is loaded and opens up the menu.

