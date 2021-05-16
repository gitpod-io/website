<script>
  import { onMount } from "svelte";

  let editUrl;

  onMount(() => {
    const path = window.location.pathname;
    const file = path.endsWith("/") ? path.substring(0, path.length - 1) : path;
    editUrl = `https://gitpod.io/#https://github.com/gitpod-io/website/blob/main/src/routes${file}.md`;
  });
</script>

<div>
  <a href={editUrl} title="Edit this page in Gitpod" target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="138"
      height="32"
      viewBox="0 0 1380 320"
    >
      <g fill="none" fillRule="evenodd">
        <rect width="1380" height="320" fill="#1966D2" rx="40" />
        <text
          fill="#FFF"
          fontFamily="Arial,Helvetica,sans-serif"
          fontWeight="400"
          fontSize="140"
          opacity="0.704"
        >
          <tspan x="650" y="210"> in Gitpod </tspan>
        </text>
        <text
          fill="#FFF"
          fontFamily="Arial,Helvetica,sans-serif"
          fontWeight="400"
          fontSize="140"
        >
          <tspan x="350" y="210"> Edit </tspan>
        </text>
        <g fill="#FFF">
          <path
            d="M129.74 201.58v-81.01L112 110.33v101.44l87.77 50.66V241.7z"
          />
          <path
            d="M199.77 220.95V161l-52.03-30.04v60.19zm1.58-143.4l70.14 40.42 17.72-10.23L201.35 57l-87.86 50.73 17.78 10.26z"
          />
          <path
            d="M253.48 128.37l-52.12-30.04-52.09 30.05 52.08 30.07zm-50.71 92.69l52.25-29.92v-20.48l-36.01 20.49v-20.71l54.01-30.74v61.88l-70.25 40.21v20.74l87.93-50.75V110.35l-87.93 50.75zm-1.42-60.88v.01-.01z"
          />
        </g>
      </g>
    </svg>
  </a>
</div>
