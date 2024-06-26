
import QRCode from 'qrcode.react';

const QrCode = ({ value }) => {
  return (
    <div>
      <QRCode value={value} />
    </div>
  );
};

export default QrCode;