# Simple Slideout navigation for your Neos project

## How to use

You can process your body content with `Ttree.Slideout:SlideoutDecorator`:

	prototype(Neos.Neos:page) {
	  head {
	    stylesheets {
	      slideout = Ttree.Slideout:SlideoutStyle
	    }
	  }
	  body {
	    @process.slideout {
	      expression = Ttree.Slideout:SlideoutDecorator {
	        menu = Your.Package:SlideoutNavigation
	      }
	      @positon = 'end 999999'
	    }
	  }
    }

Check the code of the Fusion prototype `Ttree.Slideout:SlideoutDecorator` it's pretty modular to make your
own implementaton (CSS, JS, ...).

## Acknowledgments

Development sponsored by [ttree ltd - neos solution provider](http://ttree.ch).

We try our best to craft this package with a lots of love, we are open to sponsoring, support request, ... just contact us.

## License

The MIT License (MIT). Please see [LICENSE](LICENSE) for more information.
