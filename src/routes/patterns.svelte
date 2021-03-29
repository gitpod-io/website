<style lang="scss">
  // DO NOT COPY THIS! For reference only. 
  // The colors will automatically update if the variable values update. 
  // Never use these class names outside of the pattern library. 
.colors {
  .black  {
    background-color: var(--black); 
  } 
  .dark-grey  {
    background-color: var(--dark-grey); 
  } 
  .light-grey  {
    background-color: var(--light-grey); 
  } 
  .brand-almost-ripe  {
    background-color: var(--brand-almost-ripe); 
  } 
  .brand-ripe  {
    background-color: var(--brand-ripe); 
  } 
  .brand-gradient { 
    background:  var(--brand-gradient);
  }
  .brand-light  {
    background-color: var(--brand-light); 
  } 
  .salmon  {
    background-color: var(--salmon); 
  } 
  .divider  {
    background-color: var(--divider); 
  } 
  .sand-dark  {
    background-color: var(--sand-dark); 
  } 
  .sand-light  {
    background-color: var(--sand-light); 
  } 
  .off-white  {
    background-color: var(--off-white); 
  } 
  .white  {
    background-color: var(--white); 
  } 
  li {
    display: flex;
    gap: 1rem;
    p {
      align-self: center;
    }
    .swatch {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1px solid var(--divider);
      flex: 0 0 100px;
    }
  }
}
.patterns {
  // layout for the colors
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-auto-rows: minmax(100px, auto);
  gap: 1rem;
  white-space: nowrap;
}

</style>


    <article>
      <h1>Pattern Library</h1>
    <section>
      <h2>Color Pallette</h2>
      <ul class="colors patterns"> 
        <li><div class="swatch brand-ripe"></div><p>brand-ripe</p></li> 
        <li><div class="swatch brand-almost-ripe"></div><p>brand-almost-ripe</p></li>
        <li><div class="swatch brand-light"></div><p>brand-light</p></li> 
        <li><div class="swatch salmon"></div><p>salmon</p></li>  
        <li><div class="swatch black"></div><p>black</p></li> 
        <li><div class="swatch dark-grey"></div><p>dark-grey</p></li> 
        <li><div class="swatch light-grey"></div><p>light-grey</p></li> 
        <li><div class="swatch divider"></div><p>divider</p></li> 
        <li><div class="swatch sand-dark"></div><p>sand-dark</p></li>  
        <li><div class="swatch sand-light"></div><p>sand-light</p></li> 
        <li><div class="swatch off-white"></div><p>off-white</p></li> 
        <li><div class="swatch white"></div><p>white</p></li> 
        <li><div class="swatch brand-gradient"></div><p>brand-gradient (image)</p></li>
      </ul>
    </section>
    <section>
     <h2>Header sizes</h2>
     <h3>Default Headings</h3>
     <ul>
      <li><h1>H1 Heading</h1></li>
      <li><h2>H2 Heading</h2></li>
      <li><h3>H3 Heading</h3></li>
      <li><h4>H4 Heading</h4></li>
      <li><h5>H5 Heading</h5></li>
      <li><h6>H6 Heading</h6></li>
     </ul>
     <h3>class Headings</h3>
     <ul>
      <li><p class="h1">.h1 class</p></li>
      <li><p class="h2">.h2 class</p></li>
      <li><p class="h3">.h3 class</p></li>
      <li><p class="h4">.h4 class</p></li>
      <li><p class="h5">.h5 class</p></li>
      <li><p class="h6">.h6 class</p></li>
    </ul>
    </section>
    <section>
      <h2>Buttons</h2>
<<<<<<< Updated upstream
      <ul>
        <li><a href="/" class="btn">btn</a></li>
=======
      <ul class="patterns">
        <li><a href="/" class="btn">class: btn</a></li>
>>>>>>> Stashed changes
        <li><a href="/" class="btn-conversion">btn-conversion</a></li>
        <li><a href="/" class="btn-primary">btn-primary</a></li>
        <li><a href="/" class="btn-secondary">btn-secondary</a></li>
        <li><a href="/" class="btn-tertiary">btn-tertiary</a></li>
        <li><a href="/" class="btn-quaternary">btn-quaternary</a></li>
      </ul>
    </section>
  </article>
  <hr/>
  <header>
    <h1>Testing display of HTML elements</h1>
    <p>This is the document <code>header</code> withing the content of the page (not a direct child of body)</p>
    </header>
    
    <main>
  <article aria-label="headings">
  <h1>This is 1st level heading</h1>
  <p>This is a test paragraph.</p>
  <h2>This is 2nd level heading</h2>
  <p>This is a test paragraph.</p>
  <h3>This is 3rd level heading</h3>
  <p>This is a test paragraph.</p>
  <h4>This is 4th level heading</h4>
  <p>This is a test paragraph.</p>
  <h5>This is 5th level heading</h5>
  <p>This is a test paragraph.</p>
  <h6>This is 6th level heading</h6>
  <p>This is a test paragraph.</p>
  </article>
  
  <article>
  <h2>Basic block level elements</h2>
  
  <p>This is a normal paragraph (<code>p</code> element).
  To add some length to it, let us mention that this page was
  primarily written for testing the effect of <strong>user style sheets</strong>.
  You can use it for various other purposes as well, like just checking how
  your browser displays various HTML elements by default.
  It can also be useful when testing conversions from HTML
  format to other formats, since some elements can go wrong then.</p>
  
  <p>This is another paragraph. I think it needs to be added that
  the set of elements tested is not exhaustive in any sense. I have selected
  those elements for which it can make sense to write user style sheet rules,
  in my opionion.</p>
  
  <div>This is a <code>div</code> element. Authors may use such elements instead
  of paragraph markup for various reasons. (End of <code>div</code>.)</div>
  
  <blockquote>
    <p>This is a block quotation containing a single
  paragraph. Well, not quite, since this is not <em>really</em>
  quoted text, but I hope you understand the point. After all, this
  page does not use HTML markup very normally anyway.</p>
  </blockquote>
  <p>The following contains address information about the author, in an <code>address</code>
  element.</p>
  <address>
  <a href="../somelink.html" lang="fr" hreflang="en">Mon nom en francais</a>,
  <a href="mailto:example@example.com">example@example.com</a><br>
  3 Rue Jules Ferry, Neuilly Sur Seine, France 94000
  </address></article>
  
  
  <article>
  <h2>Lists</h2>
  
  <p>This is a paragraph before an <strong>unnumbered</strong> list (<code>ul</code>). Note that
  the spacing between a paragraph and a list before or after that is hard
  to tune in a user style sheet. You can't guess which paragraphs are
  logically related to a list, e.g. as a "list header".</p>
  <ul>
    <li> One.</li>
    <li> Two.</li>
    <li> Three. Well, probably this list item should be longer. Note that
  for short items lists look better if they are compactly presented,
         whereas for long items, it would be better to have more vertical spacing between items.</li>
    <li> Four. This is the last item in this list.
         Let us terminate the list now without making any more fuss about it.</li>
  </ul>
  <p>The following is a <code>menu</code> list:</p>
  <menu>
    <li> One.</li>
    <li> Two.</li>
    <li> Three. Well, probably this list item should be longer so that it will
  probably wrap to the next line in rendering.</li>
  </menu>
  <p>The following is a <code>dir</code> list:</p>
  <dir>
    <li> One.</li>
    <li> Two.</li>
    <li> Three. Well, probably this list item should be longer so that it will
  probably wrap to the next line in rendering.</li>
  </dir>
  
  <p>This is a paragraph before a <strong>numbered</strong> list (<code>ol</code>). Note that
  the spacing between a paragraph and a list before or after that is hard
  to tune in a user style sheet. You can't guess which paragraphs are
  logically related to a list, e.g. as a "list header".</p>
  <ol>
    <li> One.</li>
    <li> Two.</li>
    <li> Three. Well, probably this list item should be longer. Note that if
  items are short, lists look better if they are compactly presented,
         whereas for long items, it would be better to have more vertical spacing between items.</li>
    <li> Four. This is the last item in this list.
         Let us terminate the list now without making any more fuss about it.</li>
  </ol>
  
  <p>This is a paragraph before a <strong>definition</strong> list (<code>dl</code>).
  In principle, such a list should consist of <em>terms</em> and associated 
  definitions.
  But many authors use <code>dl</code> elements for fancy "layout" things. Usually the
  effect is not <em>too</em> bad, if you design user style sheet rules for <code>dl</code>
  which are suitable
  for real definition lists.</p>
  <dl>
    <dt> recursion</dt>
    <dd> see recursion</dd>
    <dt> recursion, indirect</dt>
    <dd> see indirect recursion</dd>
    <dt> indirect recursion</dt>
    <dd> see recursion, indirect</dd>
    <dt> term</dt>
    <dd> a word or other expression taken into specific use in
         a well-defined meaning, which is often defined rather rigorously, even
         formally, and may differ quite a lot from an everyday meaning</dd>
  </dl>
  </article>
  
  <article>
  <h2>Text-level markup, in alphabetical order</h2>
  
  <ul>
    <li> <abbr title="Cascading Style Sheets">CSS</abbr> (an abbreviation;
   <code>abbr</code> markup used)</li>
    <li> <acronym title="radio detecting and ranging">radar</acronym> (an acronym; <code>acronym</code> markup used)</li>
    <li> <b>bolded</b> (<code>b</code> markup used - just bolding with unspecified
         semantics)</li>
    <li> <cite>Origin of Species</cite> (a book title;
         <code>cite</code> markup used)</li>
    <li> <code>a[i] = b[i] + c[i);</code> (computer code; <code>code</code> markup used)</li>
    <li> here we have some <del>deleted</del> text (<code>del</code> markup used)</li>
    <li> an <dfn>octet</dfn> is an entity consisting of eight bits
         (<code>dfn</code> markup used for the term being defined)</li>
    <li> this is <em>very</em> simple (<code>em</code> markup used for emphasizing
         a word)</li>
    <li> <i lang="la">Homo sapiens</i> (should appear in italics;  <code>i</code> markup used)</li>
    <li> here we have some <ins>inserted</ins> text (<code>ins</code> markup used)</li>
    <li> type <kbd>yes</kbd> when prompted for an answer (<code>kbd</code> markup
         used for text indicating keyboard input)</li>
    <li> <q>Hello!</q> (<code>q</code> markup used for quotation)</li>
    <li> He said: <q>She said <q>Hello!</q></q> (a quotation inside a quotation)</li>
    <li> you may get the message <samp>Core dumped</samp> at times
         (<code>samp</code> markup used for sample output)</li>
    <li> <small>this is not that important</small> (<code>small</code> markup used)</li>
    <li> <strike>overstruck</strike> (<code>strike</code> markup used; note:
         <code>s</code> is a nonstandard synonym for <code>strike</code>)</li>
    <li> <strong>this is highlighted text</strong> (<code>strong</code>
         markup used)</li>
    <li> In order to test how subscripts and superscripts (<code>sub</code> and
         <code>sup</code> markup) work inside running text, we need some
         dummy text around constructs like x<sub>1</sub> and H<sub>2</sub>O
         (where subscripts occur). So here is some fill so that
         you will (hopefully) see whether and how badly the subscripts
         and superscripts mess up vertical spacing between lines.
         Now superscripts: M<sup>lle</sup>, 1<sup>st</sup>, and then some
         mathematical notations: e<sup>x</sup>, sin<sup>2</sup> <i>x</i>,
         and some nested superscripts (exponents) too:
         e<sup>x<sup>2</sup></sup> and f(x)<sup>g(x)<sup>a+b+c</sup></sup>
         (where 2 and a+b+c should appear as exponents of exponents).</li>
    <li> <tt>text in monospace font</tt> (<code>tt</code> markup used)</li>
    <li> <u>underlined</u> text (<code>u</code> markup used)</li>
    <li> the command <code>cat</code> <var>filename</var> displays the
         file specified by the <var>filename</var> (<code>var</code> markup
         used to indicate a word as a variable).</li>
  </ul>
  
  <p>Some of the elements tested above are typically displayed in a monospace
  font, often using the <em>same</em> presentation for all of them. This
  tests whether that is the case on your browser:</p>
  
  <ul>
    <li> <code>This is sample text inside code markup</code></li>
    <li> <kbd>This is sample text inside kbd markup</kbd></li>
    <li> <samp>This is sample text inside samp markup</samp></li>
    <li> <tt>This is sample text inside tt markup</tt></li>
  </ul>
  <h2>Links</h2>
  <ul>
  <li> <a href="../index.html">main page</a></li>
  <li> <a href=
  "http://www.unicode.org/versions/Unicode4.0.0/ch06.pdf"
  title="Writing Systems and Punctuation"
  type="application/pdf"
  >Unicode Standard, chapter&nbsp;6</a></li>
  </ul>
  
  <p>This is a text paragraph that contains some
  inline links. Generally, inline links (as opposite to e.g. links
  lists) are problematic
  from the
  <a href="http://www.useit.com">usability</a> perspective,
  but they may have use as
  &#8220;incidental&#8221;, less relevant links. See the document
  <cite><a href="links.html">Links Want To Be Links</a></cite>.</p>
  </article>
  
  
  <article>
  <h2>Forms</h2>
  
  <form action="somewhere.cgi">
  <div>
  <input type="hidden" name="hidden field" value="42"/>
  This is a form containing various fields (with some initial
  values (defaults) set, so that you can see how input text looks
  like without actually typing it):</div>
      <ul>
          <li><label for="zname">Name</label><input type="text" class="classed" required="" placeholder=" Name" id="zname"></li>
          <li><label for="zemail">Email</label><input type="email" class="classed" multiple="" placeholder="email addresses" required="" id="zemail"></li>
          <li><label for="zdob">Birthday</label><input type="date" class="classed" required="" placeholder="01/01/84" id="zdob"></li>
          <li><label for="zage">Age</label><input type="number" class="classed" required="" min="21" max="105" id="zage"></li>
          <li><label for="zphone">Phone</label><input type="tel" class="classed" pattern="\d{3}-\d{3}-\d{4}" placeholder="XXX-XXX-XXXX" id="zphone"></li>
          <li><label for="zrange">Satisfaction</label><input type="range" id="zrange" min="0" max="10" step="1" list="zrangelist">
  
            <datalist id="zrangelist">
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </datalist>
          </li><li><label for="ztweet">Twitter</label><input type="text" class="classed" pattern="@\w*" placeholder="@twitter" required="" id="ztweet"></li>
          <li>
          <input type="submit" value="submit"></li>
                          </ul>
  
  <div><label for="but">Button:
  <button id="but" type="submit" name="foo" value="bar">A cool<br>button</button></label></div>
  
  <div><label for="f0">Reset button:
  <input id="f0" type="reset" name="reset" value="Reset"></label></div>
  
  <div><label for="f1">Single-line text input field: <input id="f1" name="text" size="20" value="Default text."></label></div>
  
  <div><label for="f2">Multi-line text input field (textarea):</label><br>
  <textarea id="f2" name="textarea" rows="2" cols="20">
  Default text.
  </textarea></div>
  
  <div>The following two radio buttons are inside
  a <code>fieldset</code> element with a <code>legend</code>:</div>
  
  <fieldset>
  <legend>Legend</legend>
  <div><label for="f3"><input id="f3" type="radio" name="radio" value="1"> Radio button 1</label></div>
  <div><label for="f4"><input id="f4" type="radio" name="radio" value="2" checked> Radio button 2 (initially checked)</label></div>
  </fieldset>
  
  <fieldset>
  <legend>Check those that apply</legend>
  <div><label for="f5"><input id="f5" type="checkbox" name="checkbox"> Checkbox 1</label></div>
  <div><label for="f6"><input id="f6" type="checkbox" name="checkbox2" checked> Checkbox 2 (initially checked)</label></div>
  </fieldset>
  
  <div><label for="f10">A <code>select</code> element with <code>size="1"</code>
  (dropdown box):
  <select id="f10" name="select1" size="1">
  <option>one</option>
  <option selected>two (default)</option>
  <option>three</option>
  </select></label></div>
  
  <div><label for="f11">A <code>select</code> element with <code>size="3"</code>
  (listbox):</label><br>
  <select id="f11" name="select2" size="3">
  <option>one</option>
  <option selected>two (default)</option>
  <option>three</option>
  </select></div>
  <div><label for="f99">Submit button:
  <input id="f99" type="submit" name="submit" value="Just a test"></label></div>
  </form>
  </article>
  
  <article>
  <h2>Tables</h2>
  
  <p>The following table has a caption. The first row is in a thead, the second row is the tfoot, and the rest is in a tbody. The first column
  contain table header cells (<code>th</code> elements) only; other cells
  are data cells (<code>td</code> elements):</p>
  
  <table summary=
  "Each row names a Nordic country and specifies its total area and land area, in square kilometers">
  <caption>Sample table: Areas of the Nordic countries, in sq km</caption>
  <thead><tr><th scope="col">Country</th> <th scope="col">Total area</th> <th scope="col">Land area</th></tr></thead>
  <tbody>
  <tr><th scope="row">Denmark</th> <td> 43,070 </td><td> 42,370</td></tr>
  <tr><th scope="row">Finland</th> <td>337,030 </td><td>305,470</td></tr>
  <tr><th scope="row">Iceland</th> <td>103,000 </td><td>100,250</td></tr>
  <tr><th scope="row">Norway</th>  <td>324,220 </td><td>307,860</td></tr>
  <tr><th scope="row">Sweden</th>  <td>449,964 </td><td>410,928</td></tr>
  </tbody>
  <tfoot><tr><th scope="col">Country</th> <th scope="col">Total area</th> <th scope="col">Land area</th></tr></tfoot>
  </table>
  </article>
  
  
  <article>
  <h2>HTML5 Elements</h2>
  
  <h3>Details and Summary</h3>
  <details>
    <summary>This is the summary of the details</summary>
    <p>This is a paragraph within a <code>details</code> element, outside of the <code>summary</code></p>
  </details>
  
  <h3>Figure and Figcaption</h3>
  <figure>
    <img src="none.jpg" alt="img with invalid src">
    <figcaption>This is the figcaption
    </figcaption>
  </figure>
  
  <dialog>This is a dialog</dialog>
  
  <p>This paragraph has a <mark>mark</mark></p>
  
  <h3>Meter</h3>
  <ul>
  <li><meter>Meter</meter></li>
  <li><meter value=1 min=0 max=4 low=2 high=3>1 of 4</meter></li>
  <li><meter value=2 min=0 max=4 low=1 high=3>2 of 4</meter></li>
  <li><meter value=61 min=0 max=100 low=73 high=87 optimum=100>61</meter></li>
  </ul>
  <h3>Progress</h3>
  <ul>
  <li><progress>Empty</progress></li>
  <li><progress min="0" max="100" value="17">17% complete</progress></li>
  <li><progress value="75" max="100">75% complete</progress></li>
  </ul>
  
  </article>
  
  <aside>
  <h1>This is an aside</h1>
  <h2>Character test</h2>
  <p>The following table has some sample characters with
  annotations. If the browser&#8217;s default font does not
  contain all of them, they may get displayed using backup fonts.
  This may cause stylistic differences, but it should not
  prevent the characters from being displayed at all.</p>
  
  <table>
  <thead><tr><th>Char.</th> <th>Explanation </th> <th>Notes</th></tr></thead>
  <tbody><tr><td>ê </td><td>e with circumflex </td><td>Latin 1 character, should be ok</td></tr>
  <tr><td>&#8212;</td> <td>em dash </td><td>Windows Latin 1 character, should be ok, too</td></tr>
  <tr><td>&#x100;</td> <td>A with macron (line above) </td><td>Latin Extended-A character, not present in all fonts</td></tr>
  <tr><td>&Omega;</td> <td>capital omega </td><td>A Greek letter</td></tr>
  <tr><td>&#x2212;</td> <td>minus sign </td><td>Unicode minus</td></tr>
  <tr><td>&#x2300;</td> <td>diameter sign </td><td>relatively rare in fonts</td></tr>
  </tbody>
  </table>
  </aside>
  </main>
  
  <footer>
  <hr title="Information about this document"/>
  <p>This <code>footer</code> starts with an <code>hr</code>, followed by two <code>p</code>s. It is not the main footer, but rather a footer within the main area of the document.</p>
  <p>Last update: <time>2021-03-26</time>.</p>
  </footer>
  
