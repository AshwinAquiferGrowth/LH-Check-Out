import './CheckoutExtensionBlock.css'

/**
 * Shopify Checkout UI Extension wrapper.
 * In production these render via Shopify's extension system.
 * This prototype renders them as native-looking UI.
 *
 * Set devMode={true} to show the extension target labels.
 */
function CheckoutExtensionBlock({ type, extensionPoint, devMode = false, children }) {
  if (devMode) {
    return (
      <div className="extension-block extension-block--dev">
        <div className="extension-block__label">
          <span className={`extension-block__type extension-block__type--${type?.toLowerCase().replace(/\s/g, '-') || 'default'}`}>
            {type || 'Extension'}
          </span>
          {extensionPoint && (
            <span className="extension-block__point">{extensionPoint}</span>
          )}
        </div>
        {children}
      </div>
    )
  }

  return <div className="extension-block">{children}</div>
}

export default CheckoutExtensionBlock
