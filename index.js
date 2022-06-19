/**
 * Tailwind/Gutenberg
 * @link https://git.io/Jv6Oz
 */
module.exports = {
  /**
   * Default config
   */
  defaultConfig: require('./plugins/default-config'),

  /**
   * Block contents
   *
   * Required config keys:
   *  - contentWidths
   *  - rowGap
   *  - screens
   */
  blockContent: require('./plugins/block-content'),

  /**
   * Typographic settings
   *
   * Required config keys:
   *  - fontFamily
   *  - fontSizes
   *  - fontSizes.generated
   */
  typography: require('./plugins/typography'),

  /**
   * Base color settings
   *
   * Required config keys:
   *  - gutenberg.colors
   */
  colors: require('./plugins/colors'),

  /**
   * core/embed
   *
   * Required config keys:
   *  - @todo
   */
  aspectRatios: require('./plugins/aspect-ratios'),

  /**
   * core/group
   * core/columns
   * core/column
   */
  columns: require('./plugins/columns'),
  group: require('./plugins/group'),

  /**
   * Figcaptions
   */
  figcaption: require('./plugins/figcaption'),

  /**
   * core/embed
   */
  blockEmbed: require('./plugins/block-embed'),

  /**
   * core/image
   */
  image: require('./plugins/block-image'),

  /**
   * core/video
   */
  video: require('./plugins/block-video'),

  /**
   * core/cover
   */
  cover: require('./plugins/block-cover'),

  /**
   * core/table
   */
  table: require('./plugins/block-table'),
}