define([],()=>{

  let surge_table = {
    1: "Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
    2: "Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
    3: "For the next minute, you can see any invisible creature if you have line of sight to it.",
    4: "For the next minute, you can see any invisible creature if you have line of sight to it.",
    5: "A [Modron](#monsterbox/Monodrone) chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears I minute later.",
    6: "A [Modron](#monsterbox/Monodrone) chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears I minute later.",
    7: "You cast [Fireball](#spellbox/Fireball) as a 3rd-level spell centered on yourself.",
    8: "You cast [Fireball](#spellbox/Fireball) as a 3rd-level spell centered on yourself.",
    9: "You cast [Magic Missile](#spellbox/Magic Missile) as a 5th-level spell.",
    10: "You cast [Magic Missile](#spellbox/Magic Missile) as a 5th-level spell.",
    11: "Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",
    12: "Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",
    13: "You cast [Confusion](#spellbox/Confusion) centered on yourself.",
    14: "You cast [Confusion](#spellbox/Confusion) centered on yourself.",
    15: "For the next minute, you regain 5 hit points at the start of each of your turns.",
    16: "For the next minute, you regain 5 hit points at the start of each of your turns.",
    17: "You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",
    18: "You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",
    19: "You cast [Grease](#spellbox/Grease) centered on yourself.",
    20: "You cast [Grease](#spellbox/Grease) centered on yourself.",
    21: "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",
    22: "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",
    23: "Your skin turns a vibrant shade of blue. A [Remove Curse](#spellbox/Remove Curse) spell can end this effect.",
    24: "Your skin turns a vibrant shade of blue. A [Remove Curse](#spellbox/Remove Curse) spell can end this effect.",
    25: "An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.",
    26: "An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.",
    27: "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action.",
    28: "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action.",
    29: "You teleport up to 60 feet to an unoccupied space of your choice that you can see.",
    30: "You teleport up to 60 feet to an unoccupied space of your choice that you can see.",
    31: "You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.",
    32: "You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.",
    33: "Maximize the damage of the next damaging spell you cast within the next minute.",
    34: "Maximize the damage of the next damaging spell you cast within the next minute.",
    35: "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",
    36: "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",
    37: "1d6 [Flumphs](#monsterbox/Flumph) controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.",
    38: "1d6 [Flumphs](#monsterbox/Flumph) controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.",
    39: "You regain 2d10 hit points.",
    40: "You regain 2d10 hit points.",
    41: "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
    42: "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
    43: "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns.",
    44: "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns.",
    45: "You cast [Levitate](#spellbox/Levitate) on yourself.",
    46: "You cast [Levitate](#spellbox/Levitate) on yourself.",
    47: "A [Unicorn](#monsterbox/Unicorn) controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.",
    48: "A [Unicorn](#monsterbox/Unicorn) controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.",
    49: "You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth.",
    50: "You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth.",
    51: "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to [Magic Missile](#spellbox/Magic Missile).",
    52: "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to [Magic Missile](#spellbox/Magic Missile).",
    53: "You are immune to being intoxicated by alcohol for the next 5d6 days.",
    54: "You are immune to being intoxicated by alcohol for the next 5d6 days.",
    55: "Your hair falls out but grows back within 24 hours.",
    56: "Your hair falls out but grows back within 24 hours.",
    57: "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
    58: "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
    59: "You regain your lowest-level expended spell slot.",
    60: "You regain your lowest-level expended spell slot.",
    61: "For the next minute, you must shout when you speak.",
    62: "For the next minute, you must shout when you speak.",
    63: "You cast [Fog Cloud](#spellbox/Fog Cloud) centered on yourself.",
    64: "You cast [Fog Cloud](#spellbox/Fog Cloud) centered on yourself.",
    65: "Up to three creatures you choose within 30 feet of you take 4d10 lightning damage.",
    66: "Up to three creatures you choose within 30 feet of you take 4d10 lightning damage.",
    67: "You are frightened by the nearest creature until the end of your next turn.",
    68: "You are frightened by the nearest creature until the end of your next turn.",
    69: "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
    70: "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
    71: "You gain resistance to all damage for the next minute.",
    72: "You gain resistance to all damage for the next minute.",
    73: "A random creature within 60 feet of you becomes poisoned for 1d4 hours.",
    74: "A random creature within 60 feet of you becomes poisoned for 1d4 hours.",
    75: "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.",
    76: "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.",
    77: "You cast [Polymorph](#spellbox/Polymorph) on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.",
    78: "You cast [Polymorph](#spellbox/Polymorph) on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.",
    79: "Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute.",
    80: "Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute.",
    81: "You can take one additional action immediately.",
    82: "You can take one additional action immediately.",
    83: "Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.",
    84: "Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.",
    85: "You cast [Mirror Image](#spellbox/Mirror Image).",
    86: "You cast [Mirror Image](#spellbox/Mirror Image).",
    87: "You cast [Fly](#spellbox/Fly) on a random creature within 60 feet of you.",
    88: "You cast [Fly](#spellbox/Fly) on a random creature within 60 feet of you.",
    89: "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
    90: "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
    91: "If you die within the next minute, you immediately come back to life as if by the [Reincarnate](#spellbox/Reincarnate) spell.",
    92: "If you die within the next minute, you immediately come back to life as if by the [Reincarnate](#spellbox/Reincarnate) spell.",
    93: "Your size increases by one size category for the next minute.",
    94: "Your size increases by one size category for the next minute.",
    95: "You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute.",
    96: "You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute.",
    97: "You are surrounded by faint, ethereal music for the next minute.",
    98: "You are surrounded by faint, ethereal music for the next minute.",
    99: "You regain all expended sorcery points.",
    100: "You regain all expended sorcery points.",

  }
  return surge_table;
});