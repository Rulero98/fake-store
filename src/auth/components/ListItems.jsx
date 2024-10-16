import PropTypes from 'prop-types'

export const ListItems = ({ items, noItem = 0 }) => {
  return (
    <>
      {
        (items)
          ? <img
            key={items[noItem].id}
            className="w__img animate__animated animate__fadeIn"
            src={items[noItem].image}
          />
          : 'Loading...'
      }
    </>
  )
}

ListItems.propTypes = {
  items: PropTypes.array,
  noItem: PropTypes.number,
}