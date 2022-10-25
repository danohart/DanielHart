<div class="col">
  <h1 class="post-title">DRY: Don’t Repeat Yourself Coding Example</h1>
  <div class="row">
    <div class="post-date col">
      Written on <strong>2 Feb 2022</strong>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <img src="https://blog.danielhart.co/wp-content/uploads/2022/01/james-harrison-vpOeXr5wmR4-unsplash-1024x576.jpg" />
    </div>
  </div>
  <div class="post-content">
    <p>
      I am currently in the process of converting this website from using{' '}
      <a
        href="https://www.gatsbyjs.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Gatsby.js
      </a>{' '}
      to{' '}
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">
        Next.js
      </a>
      …which is a fun challenge for me as I enjoy working with both frameworks
      but have spent more time working with Next these days. I even have a video
      showing how
      <a href="https://danielhart.co/blog/converting-to-next-js-from-create-react-app">
        {' '}
        I converted a simple create-react-app to Next
      </a>{' '}
      that you can watch for more info.
    </p>

    <p>
      I’ll share more details of the what and why for this conversion, but I
      thought I would give you a quick example of the rule DRY…don’t repeat
      yourself…in code to make things easier for future you, or me in this case.
    </p>

    <h2 id="updating-your-old-code-and-think-dry">
      Updating your old code and think DRY
    </h2>

    <p>
      On the homepage, I have three benefits listed in{' '}
      <a href="https://danielhart.co/hire">hiring me for your project</a> and
      each of them have an icon to represent each benefit. Let’s take a look at
      the code to display each icon.
    </p>

    <div class="wp-block-columns">
      <div class="wp-block-column">
        <pre class="wp-block-code">
          <code>
            {' '}
            &lt;Row&gt; &lt;Col&gt; &lt;div className="benefits-icon"&gt;
            &lt;div className="icon-background"&gt; &lt;FontAwesomeIcon icon=
            {faBarcode} size="2x" /&gt; &lt;/div&gt; &lt;/div&gt; &lt;/Col&gt;
            &lt;/Row&gt;
          </code>
        </pre>
      </div>

      <div class="wp-block-column">
        <pre class="wp-block-code">
          <code>
            {' '}
            &lt;Row&gt; &lt;Col&gt; &lt;div className="benefits-icon"&gt;
            &lt;div className="icon-background"&gt; &lt;FontAwesomeIcon icon=
            {faCodeBranch} size="2x" /&gt; &lt;/div&gt; &lt;/div&gt;
            &lt;/Col&gt; &lt;/Row&gt;
          </code>
        </pre>
      </div>

      <div class="wp-block-column">
        <pre class="wp-block-code">
          <code>
            {' '}
            &lt;Row&gt; &lt;Col&gt; &lt;div className="benefits-icon"&gt;
            &lt;div className="icon-background"&gt; &lt;FontAwesomeIcon icon=
            {faCode} size="2x" /&gt; &lt;/div&gt; &lt;/div&gt; &lt;/Col&gt;
            &lt;/Row&gt;
          </code>
        </pre>
      </div>
    </div>

    <p>
      If you look through each column of code, you’ll see the only difference is
      the icon name itself. The all have the same class names, div and container
      structure…so if I wanted to change the class name, I would have to update
      the code in three different places and it’ll most likely be the same
      change, causing me to repeat myself. Let’s fix that by creating a constant
      in javascript that just passes the unique icon name and place it in the
      same code structure wherever it needs to be.
    </p>

    <h2 id="creating-a-reusable-constant">Creating a reusable constant</h2>

    <pre class="wp-block-code">
      <code>
        const benefitsIcon = (icon) =&gt; ( &lt;Row&gt; &lt;Col&gt; &lt;div
        className="benefits-icon"&gt; &lt;div className="icon-background"&gt;
        &lt;FontAwesomeIcon icon={icon} size="2x" /&gt; &lt;/div&gt;
        &lt;/div&gt; &lt;/Col&gt; &lt;/Row&gt; );
      </code>
    </pre>

    <p>
      This code above you’ll notice that I created a constant, and passing a
      variable I named “icon” and changed the spot where the unique icon name
      would be to that variable of “icon”. Now we can just call that constant
      anywhere we need an icon, and make sure we type in the correct icon name,
      and then we’ll be good to go.
    </p>

    <h2 id="displaying-the-icon-in-jsx">Displaying the icon in JSX</h2>

    <pre class="wp-block-code">
      <code>
        {benefitsIcon(faBarcode)}
        {benefitsIcon(faCodeBranch)}
        {benefitsIcon(faCode)}
      </code>
    </pre>

    <p>
      Now where I need to show an icon looks like the above code, with the
      proper icon name and there we have it! If I need to change something like
      a class name, I will change it in the constant I declared above and it
      will affect all three spots these icons are displayed.{' '}
    </p>

    <p>
      I put this constant inside the React component that I need it in, but we
      could go further and make an Icon component that could be imported and
      reused throughout the whole website, however I chose not to as this will
      be the only place on the site that is displaying an icon…for now.
    </p>
  </div>
</div>;
