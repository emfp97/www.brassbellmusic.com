      var varieties=[
        ["--Select Teacher--"],
        ["--Select Teacher--","Josh Backes"],
        ["--Select Teacher--", "Kyle Samuelson"],
        ["--Select Teacher--", "Mike Miller", "Lauren Sperry"],
        ["--Select Teacher--", "Sacia Jerome", "Ben Kalb", "Heather Lewin"],
        ["--Select Teacher--", "Tomás Goldsmith", "Jon Lovas", "Mike Miller", "Lauren Sperry"],
        ["--Select Teacher--", "Dan Broderick", "Timothy Dries", "Gabe Hammer", "Matt Liban", "Paul Westfahl", "Will Rose", "Ben Bruns"],
        ["--Select Teacher--", "Chris Carloni", "Paul Terrien", "Gary Williams"],
        ["--Select Teacher--", "Tomás Goldsmith", "Jon Lovas", "Mike Miller", "Lauren Sperry"],
        ["--Select Teacher--", "Josh Backes", "Adam Bjoraker", "Maurice Colter", "John Hill", "Larry Kaplin", "Michael Mckinnon", "Larry Pumpian", "Paul Terrien", "Lena Vinz", "Gary Williams"],
        ["--Select Teacher--", "Gabe Hammer", "Paul Westfahl"],
        ["--Select Teacher--", "Dan Broderick", "Timothy Dries", "Gabe Hammer", "Will Rose"],
        ["--Select Teacher--", "Josh Backes"],
        ["--Select Teacher--", "Dan Broderick", "Timothy Dries", "Gabe Hammer", "Matt Liban", "Paul Westfahl", "Will Rose"],
        ["--Select Teacher--", "Jon Lovas", "Lauren Sperry"],
        ["--Select Teacher--", "Andrew Black", "Jessica Baker", "Maurice Colter", "Zosia Holden", "Julia Ionina", "Ben Kalb", "Joe Nicolay", "Alicia Rhyner", "Katherine Schierenbeck", "Maria Schlei", "Michel Shestak", "Renato Umali"],
        ["--Select Teacher--", "Lauren Sperry"],
        ["--Select Teacher--", "Tomás Goldsmith", "Jon Lovas", "Mike Miller"],
        ["--Select Teacher--", "Kyle Samuelson"],
        ["--Select Teacher--", "Dale Elenich", "Kyle Samuelson", "Eric Sperry"],
        ["--Select Teacher--", "Kyle Samuelson"],
        ["--Select Teacher--", "Josh Backes", "Adam Bjoraker", "Christine Georgenson", "Michael Mckinnon"],
        ["--Select Teacher--", "Chris Carloni"],
        ["--Select Teacher--", "Jason Busniewski", "Rachel CW Hecker", "Rachael Charles", "Travis Leanna", "Heather Lewin", "Molly Lieberman", "Laura Thompson", "Janna van Gelderen"],
        ["--Select Teacher--", "Jason Busniewski", "Rachel CW Hecker", "Rachael Charles", "Travis Leanna", "Heather Lewin", "Molly Lieberman", "Laura Thompson", "Janna van Gelderen"],
        ["--Select Teacher--", "Ruth Brown", "Clare Czechowicz"]
        ];
      function Box2(idx) {
        var f=document.myform;
        f.box2.options.length=null;
        for(var i=0; i<varieties[idx].length; i++) {
          f.box2.options[i]=new Option(varieties[idx][i], i); 
        }    
      }

      window.onload=function() {
        var box1=document.myform.box1;
        box1.onchange=function(){Box2(this.selectedIndex);};
      // create 2nd select
      try { // IE
        var sel=document.createElement("<select name=\"box2\"><\/select>");
      }
      catch(e) {
        var sel=document.createElement("select");
        sel.name = "box2";
        sel.id = "box2";
      }
      document.myform.getElementsByTagName('div')[0].insertBefore(sel, box1.nextSibling);
      // fill 2nd select
      Box2(0);
  	}