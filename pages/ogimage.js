import { useRouter } from 'next/router';

export default function OGImage() {
  const router = useRouter();

  const title = router.query.title;
  const excerpt = router.query.excerpt;
  const image = router.query.image;

  const styles =
    image !== undefined
      ? { backgroundImage: `url(${image})` }
      : { backgroundImage: `url('/speed.jpg')` };

  return (
    <div className="ogimage">
      <div className="ogimage-overlay"></div>
      <div className="ogimage-image" style={styles}></div>
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
