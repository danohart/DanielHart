import { useRouter } from 'next/router';

export default function OGImage() {
  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

  const title = searchParams.get('title');
  const excerpt = searchParams.get('excerpt');
  const image = searchParams.get('image');

  return (
    <div className="ogimage">
      <div className="ogimage-overlay"></div>
      <div
        className="ogimage-image"
        style={{ backgroundImage: `url(${image ? image : '/speed.jpg'})` }}
      ></div>
      <div className="ogimage-content">
        <h1 className="ogimage-title">
          {title ? title : 'OG Image Generation Title Text'}
        </h1>
        <p className="ogimage-excerpt">
          {excerpt
            ? excerpt
            : 'This is an example of a description of the page or blog post that will be generated in the OG image component if served one.'}
        </p>
      </div>
    </div>
  );
}
