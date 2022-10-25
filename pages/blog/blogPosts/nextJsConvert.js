<div class="col">
  <h1 class="post-title">Converting to Next.js from create-react-app</h1>
  <div class="row">
    <div class="post-date col">
      Written on <strong>2 Feb 2022</strong>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <img src="https://blog.danielhart.co/wp-content/uploads/2018/04/bench-accounting-49025-unsplash-1024x684.jpg" />
    </div>
  </div>
  <div class="post-content">
    <p>
      Like most new projects, you may have started with a framework or toolset
      that you no longer wish to use. But are you stuck with what you have?
      Well, if you created a{' '}
      <a
        href="https://github.com/facebook/create-react-app"
        target="_blank"
        rel="noreferrer noopener"
      >
        create-react-app
      </a>{' '}
      using Facebook’s boilerplate repository of the same name to start your
      project, but want to convert to the{' '}
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">
        Next.js framework
      </a>
      , then keep reading.
    </p>

    <p>
      A big reason for using Next.js is the way routes work. That is, a folder
      in your Next project is created called <code>pages</code> that any file
      created in that folder acts like a url route. Example, if there is a file
      named <code>about.js</code> then you you can go to{' '}
      <code>yourdomain.com/about</code> and that file will be loaded. Whereas,
      with create-react-app(or CRA), you have to specify what happens when your
      web visitor goes to <code>/about</code> and what gets loaded. You can
      learn more about
      <a
        href="https://nextjs.org/docs/basic-features/pages"
        target="_blank"
        rel="noreferrer noopener"
      >
        {' '}
        how Next handles pages and routes here
      </a>
      .
    </p>

    <p>
      I would recommend first by creating a new app with Next, like so from your
      terminal…
    </p>

    <pre class="wp-block-code">
      <code>npx create-next-app # or yarn create next-app</code>
    </pre>

    <p>
      This will start the process of getting the needed files for a new app.
      Once that is done, in it’s most basic form, you’ll probably have files in
      your CRA of React components that you created, just copy and paste those
      files into the <code>pages</code> folder of your new Next.js app, and then
      make sure they’re named properly and not just <code>index.js</code>, as
      that should be used for your homepage component. Then, all your routes
      will just work. Now you can get rid of your whatever routes you had set up
      in your CRA, we don’t need them anymore.
    </p>

    <p>
      For an example of this conversion, here’s a video tutorial where I walk
      you through a project for a bus and train tracker app I started with CRA,
      but then wanted to move it to Next.{' '}
    </p>

    <figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
      <div class="wp-block-embed__wrapper">
        <iframe
          loading="lazy"
          title="Converting Create-React-App to Next.js from Vercel"
          width="500"
          height="281"
          src="https://www.youtube.com/embed/tF1puEIZUP0?feature=oembed"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </div>
    </figure>
  </div>
</div>;
