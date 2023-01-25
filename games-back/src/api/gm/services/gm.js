'use strict';

/**
 * gm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gm.gm');
