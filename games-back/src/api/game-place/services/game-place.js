'use strict';

/**
 * game-place service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-place.game-place');
