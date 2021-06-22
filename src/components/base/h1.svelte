<style type="text/postcss">
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    /* identical to box height, or 110% */

    letter-spacing: -0.004em;
    text-transform: capitalize;

    /* Black */
    color: #12100c;
  }

  @screen lg {
    h1 {
      font-size: 80px;
      line-height: 88px;
    }
  }
</style>

<h1><slot /></h1>
