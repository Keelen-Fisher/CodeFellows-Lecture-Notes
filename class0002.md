# Express, NPM, TDD, CI/CD

## An introduction to NodeJS and Express [Read:](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

- Middleware can be explained like this: It's like a piece of software that can communicate between the application that you are building and what your end points are. Basically, it's like a way to pass information through if it meets requirements and if not, it's not going through.

- Express is the most popular Node web framework.

- From the link provided above: "Opinionated frameworks are those with opinions about the "right way" to handle any particular task. Unopinionated frameworks, by contrast, have far fewer restrictions on the best way to glue components together to achieve a goal, or even what components should be used."

- A module is a  JavaScript library/file that you can import into other code using Node's require() function. An examples is Express and middleware libraries.

## What is NPM [READ:](https://docs.npmjs.com/about-npm)

- What version of npm are you running on your machine? `8.19.1`

- What command would you type to install a library/package called ‘jshint’ into your node project?  `npm install jshint in CLI.`

## What is TDD [READ:](https://www.agilealliance.org/glossary/tdd/#q=~(infinite~false~filters~(postType~(~'page~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'tdd))~searchTerm~'~sort~false~sortDirection~'asc~page~1))

- Here's some reasons as to why tests are important. You want to verify that something of yours works and that it works efficiently. You also want to check see where exactly you failed at, mainly for the reason that you may have a huge problem and you may have a hard time knowing where to start to work on solving the issue.

- What are three expected benefits of testing

      - many teams report significant reductions in defect rates, at the cost of a moderate increase in initial development effort 

      - the same teams tend to report that these overheads are more than offset by a reduction in effort in projects’ final phases

      - although empirical research has so far failed to confirm this, veteran practitioners report that TDD leads to improved design qualities in the code, and more generally a higher degree of “internal” or technical quality, for instance improving the metrics of cohesion and coupling

- Name at lest 2 individual pitfalls and at least 2 team pitfalls commonly encountered while writing tests.

      - Individual: 
        - forgetting to run test frequently 
        - writing overly trivial tests, for instance omitting assertions

      - Team:
        - partial adoption – only a few developers on the team use TDD
        - abandoned test suite (i.e. seldom or never run) – sometimes as a result of poor maintenance, sometimes as a result of team turnover

## CI/CD [WATCH:](https://www.youtube.com/watch?v=xSv_m3KhUO8)

- What are three benefits of Continuous Integration?

          - Ensure everyone's changes integrate
          - Catch Bugs
          - Reduce merge conflicts

- What is the difference between Continuous Delivery and Continuous Deployment?

  - Continuous Delivery: this is a practice that you could release at anytime. More manageable increments

  - Continuous Deployment: This is a practice that you could deploy new features immediately.

- Explain how GitHub fits into this process assuming the listener comes from a non-technical - background

  - Github is like a clearinghouse for your code. You can push and pull from here. Github uses something called Webhooks to send messages to external systems about activity in your projects

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
