import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webImage, description }) => {
  return (
    <li
      style={{
        borderRadius: '2px',
        boxShadow:
          '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
      }}
    >
      <img
        src={webImage}
        alt={description}
        style={{
          width: '100%',
          height: '260px',
          objectFit: 'cover',
          transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </li>
  );
};

Event.propTypes = {
  webImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
