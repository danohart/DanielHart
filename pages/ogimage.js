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
          {title ? title : 'Daniel Hart Web Design'}
        </h1>
        <p className="ogimage-excerpt">{excerpt ? excerpt : ''}</p>
      </div>
    </div>
  );
}
