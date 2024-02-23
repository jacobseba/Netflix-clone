import { ArrowBackOutlined } from '@mui/icons-material';
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://www.youtube.com/watch?time_continue=1&v=NLOp_6uPccQ&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2F&source_ve_path=Mjg2NjY&feature=emb_logo"
      />
    </div>
  );
}