// Exercise Reference Data
// Contains training tips for each exercise

const exerciseReference = {
    // ==================== PUSHUPS ====================
    'push up': {
        tips: [
            'Classic pushup: lower chest to ground, push back up',
            'Keep core tight and body in a straight line',
            'Elbows at about 45 degrees, not flared out'
        ]
    },
    'slow push up': {
        tips: [
            'Classic pushup performed slowly (3-4 seconds down, 3-4 seconds up)',
            'Focus on muscle control throughout',
            'Breathe steadily - inhale down, exhale up'
        ]
    },
    'inchworm pushup': {
        tips: [
            'Walk hands out from standing to plank, do a pushup, walk hands back',
            'Keep legs as straight as possible',
            'Engage core throughout'
        ]
    },
    'shortie pushup': {
        tips: [
            'Classic pushup with shorter range of motion',
            'Great for building endurance or when fatigued',
            'Maintain proper form even with reduced range'
        ]
    },
    'pike press': {
        tips: [
            'Pushup in downward dog position with hips high',
            'Lower head toward ground between hands',
            'Targets shoulders more than chest'
        ]
    },
    'super pushup': {
        tips: [
            'Explosive pushup: lift hands and feet off ground at top',
            'Land softly and immediately go into next rep',
            'Build up to this after mastering regular pushups'
        ]
    },
    'shoulder tap': {
        tips: [
            'In plank, tap opposite shoulder with each hand',
            'Keep hips stable - don\'t rock side to side',
            'Widen feet for more stability'
        ]
    },
    'renegade row': {
        tips: [
            'Plank position with dumbbells, row one arm up while stabilizing',
            'Keep hips square to the ground',
            'Use lighter weights, focus on core stability'
        ]
    },
    'up down plank': {
        tips: [
            'Transition between high plank and forearm plank, one arm at a time',
            'Alternate which arm leads each rep',
            'Keep hips as still as possible'
        ]
    },

    // ==================== PLANK EXERCISES ====================
    'plank crunch': {
        tips: [
            'From plank, bring knee toward elbow, then extend back',
            'Round back slightly as knee comes in',
            'Alternate legs or do all reps on one side'
        ]
    },
    'low plank': {
        tips: [
            'Hold on forearms with body in straight line',
            'Don\'t let hips sag or pike up',
            'Squeeze glutes and brace core'
        ]
    },
    'side plank': {
        tips: [
            'Support body sideways on one forearm, feet stacked or staggered',
            'Keep body in straight line - don\'t let hips drop',
            'Reach top arm to ceiling'
        ]
    },
    'raised leg plank': {
        tips: [
            'Hold plank while lifting one leg a few inches',
            'Keep hips level - don\'t rotate',
            'Switch legs halfway through'
        ]
    },
    'wide hold plank': {
        tips: [
            'Standard plank with feet wider than hip-width',
            'Provides more stability - good for beginners',
            'Focus on breathing steadily'
        ]
    },
    'plank jack': {
        tips: [
            'In plank, jump feet out and in like a jumping jack',
            'Keep upper body still',
            'Land softly'
        ]
    },
    'clock plank': {
        tips: [
            'In plank, walk hands in small circle like clock hands',
            'Small controlled movements',
            'Reverse direction halfway through'
        ]
    },
    'hamstring walkout': {
        tips: [
            'From standing, walk hands out to plank, then walk back',
            'Keep legs as straight as possible',
            'Feel the hamstring stretch walking back'
        ]
    },
    'tall plank hip extension': {
        tips: [
            'From high plank, lift one leg straight up',
            'Squeeze glute at top, don\'t arch lower back',
            'Keep hips square to ground'
        ]
    },
    'plank taps': {
        tips: [
            'In plank, tap each hand to opposite shoulder',
            'Minimize hip movement',
            'Go slower if wobbling'
        ]
    },
    'jump planks': {
        tips: [
            'From plank, jump feet forward toward hands, then back',
            'Land softly with bent knees',
            'Keep hands planted'
        ]
    },
    'plank punch': {
        tips: [
            'In plank, alternate punching forward with each arm',
            'Keep core tight to prevent rotation',
            'Punch with control'
        ]
    },
    'side crunch plank': {
        tips: [
            'In side plank, bring top elbow and knee together',
            'Crunch obliques, then extend back out',
            'Keep bottom hip lifted'
        ]
    },

    // ==================== CORE ROTATION ====================
    'side lying rotation': {
        tips: [
            'Lie on side, rotate upper body opening chest to ceiling',
            'Keep hips stacked and stable',
            'Follow hand with your eyes'
        ]
    },
    'upsidedown turtle': {
        tips: [
            'On back with arms and legs raised, rock side to side',
            'Keep lower back pressed to floor',
            'Control the movement'
        ]
    },
    'side scatters with toe touch': {
        tips: [
            'Standing, reach down to touch opposite toe with rotation',
            'Keep slight bend in standing knee',
            'Rotate through your core'
        ]
    },
    'side plank windmill': {
        tips: [
            'In side plank, rotate top arm under body then sweep back up',
            'Follow hand with your eyes',
            'Keep hips lifted throughout'
        ]
    },
    'lawnmowers': {
        tips: [
            'Single-arm snatch: drive weight from ground to overhead explosively',
            'Rotate through hips and core as you pull',
            'Stagger stance, alternate sides each rep'
        ]
    },

    // ==================== BACK ====================
    'superman': {
        tips: [
            'Lie face down, lift arms and legs simultaneously',
            'Squeeze glutes and back at the top',
            'Keep neck neutral - look at floor'
        ]
    },
    'table': {
        tips: [
            'Reverse tabletop: support body on hands and feet facing up, hips lifted',
            'Keep hips in line with shoulders and knees',
            'Press through palms and heels evenly'
        ]
    },
    'glute bridge': {
        tips: [
            'Lie on back, feet flat, lift hips toward ceiling',
            'Squeeze glutes hard at the top',
            'Stop when hips align with knees'
        ]
    },
    'superman\'s balls': {
        tips: [
            'Prone on yoga ball, perform IYT raises with light weights (1-3 lbs)',
            'Form letters I, Y, and T with arms while balancing',
            'Keep core tight and neck neutral'
        ]
    },

    // ==================== MOSTLY ABS ====================
    'dead bug': {
        tips: [
            'On back, extend opposite arm and leg while keeping back flat',
            'Press lower back into floor throughout',
            'Move slowly with control'
        ]
    },
    'bicycle': {
        tips: [
            'On back, touch opposite elbow to knee in cycling motion',
            'Keep lower back pressed to floor',
            'Fully extend the straight leg each time'
        ]
    },
    'big crunch': {
        tips: [
            'Full crunch bringing shoulders fully off ground',
            'Reach hands toward feet or ceiling',
            'Exhale as you crunch up'
        ]
    },
    'leg flutter': {
        tips: [
            'Lie on back, flutter kick legs up and down',
            'Keep lower back pressed to floor',
            'Smaller, faster kicks are more effective'
        ]
    },
    'boat': {
        tips: [
            'Balance on sit bones with legs and torso in V-shape',
            'Keep chest lifted and back straight',
            'Bend knees if needed'
        ]
    },
    'v-ups': {
        tips: [
            'Simultaneously lift torso and straight legs to touch toes at top',
            'Keep arms and legs straight',
            'Lower with control'
        ]
    },
    'russian twist': {
        tips: [
            'Seated with lean back, rotate torso side to side',
            'Lift feet for more challenge',
            'Move from your core, not just arms'
        ]
    },
    'windshield wipers': {
        tips: [
            'On back with legs raised, rotate legs side to side',
            'Keep shoulders flat on ground',
            'Control the movement'
        ]
    },
    'frog crunch': {
        tips: [
            'Lie with soles of feet together and knees out, crunch up',
            'Reach between or around your knees',
            'Keep lower back supported'
        ]
    },
    'side crunch': {
        tips: [
            'Lie on side, crunch bringing shoulder toward hip',
            'Focus on squeezing obliques',
            'Hand behind head for support, not pulling'
        ]
    },
    'balanced crunch': {
        tips: [
            'Crunch while balancing on sit bones',
            'Keep hands extended for balance',
            'Control throughout'
        ]
    },

    // ==================== OTHER CORE ====================
    'standing obliques': {
        tips: [
            'Standing, crunch sideways bringing elbow toward hip',
            'Feel the squeeze in your side',
            'Keep hips stable'
        ]
    },
    'standing kte': {
        tips: [
            'Standing knee-to-elbow: bring knee up to meet opposite elbow',
            'Rotate core to bring them together',
            'Keep standing leg slightly bent'
        ]
    },
    'shoulder bridge': {
        tips: [
            'Glute bridge held at top with weight on shoulders',
            'Can extend one leg for added difficulty',
            'Keep core engaged'
        ]
    },
    'crab walk': {
        tips: [
            'In crab position (table facing up), walk sideways',
            'Keep hips lifted throughout',
            'Move opposite hand and foot together'
        ]
    },
    'crab toe touch': {
        tips: [
            'In crab position, kick leg up and touch with opposite hand',
            'Lift hips as you kick',
            'Alternate sides'
        ]
    },
    'jackknife': {
        tips: [
            'Lie flat, bring arms and straight legs up to meet in middle',
            'Keep limbs straight throughout',
            'Lower with control'
        ]
    },
    'jackknife get ups': {
        tips: [
            'Jackknife up from lying and continue momentum to standing',
            'Use momentum from the jackknife to rise',
            'Control the descent back down'
        ]
    },
    'plank toe touches': {
        tips: [
            'From plank, pike hips up and touch opposite toe',
            'Return to plank between each touch',
            'Keep legs straight'
        ]
    },
    'james bond lunges': {
        tips: [
            'Lunges while making gun gesture and "shooting" at target',
            'Focus on proper lunge form - knee over ankle',
            'Have fun with it'
        ]
    },
    'bird dogs': {
        tips: [
            'On all fours, extend opposite arm and leg',
            'Keep back flat - imagine balancing a cup',
            'Move slowly with control'
        ]
    },
    'long lever plank': {
        tips: [
            'Plank with arms extended further forward than normal',
            'Increases core demand significantly',
            'Keep body in straight line'
        ]
    },
    'copenhagen': {
        tips: [
            'Side plank with top leg on bench, bottom leg suspended',
            'Lift bottom leg up to meet top leg',
            'Targets adductors and obliques'
        ]
    },
    'single leg glute bridge': {
        tips: [
            'Glute bridge with one leg extended',
            'Keep hips level',
            'Squeeze glute hard at top'
        ]
    },

    // ==================== MOSTLY LEGS ====================
    'squat': {
        tips: [
            'Stand with feet shoulder-width, sit back and down like into a chair',
            'Keep chest up and knees tracking over toes',
            'Go as low as you can with good form'
        ]
    },
    'squat jab': {
        tips: [
            'Squat down, then punch as you stand up',
            'Alternate arms each rep',
            'Power the punch from legs and core'
        ]
    },
    'sumo squat': {
        tips: [
            'Wide stance squat with toes pointed outward',
            'Keep torso upright',
            'Feel the stretch in inner thighs at bottom'
        ]
    },
    'doggie': {
        tips: [
            'Squat down touching ground with both hands, then jump up',
            'Land softly with bent knees',
            'Reach down with both hands each rep'
        ]
    },
    'calf raise': {
        tips: [
            'Rise up onto balls of feet, squeeze calves at top',
            'Lower heels below starting point for full range',
            'Hold something for balance if needed'
        ]
    },
    'curtsy lunge': {
        tips: [
            'Step one leg behind and across into a curtsy, lower into lunge',
            'Keep front knee over toes',
            'Great for glutes and inner thighs'
        ]
    },
    'wall sit': {
        tips: [
            'Back against wall, thighs parallel to ground, hold',
            'Keep knees at 90 degrees over ankles',
            'Press back firmly into wall'
        ]
    },
    'side lunge': {
        tips: [
            'Step wide to side, sit back into that hip',
            'Keep other leg straight, foot flat',
            'Push back to center'
        ]
    },
    'single leg romanian deadlift': {
        tips: [
            'Hinge forward on one leg, other leg extends behind',
            'Keep back flat throughout',
            'Only go as low as form allows'
        ]
    },
    'single leg sit down': {
        tips: [
            'Lower to seated on one leg, stand back up',
            'Use a chair or bench as target',
            'Control the descent'
        ]
    },
    'reverse lunge into single leg jump': {
        tips: [
            'Step back into lunge, then explode up on front leg',
            'Land softly on same leg',
            'Use arms for power'
        ]
    },
    'box jump': {
        tips: [
            'Jump onto a box or platform with both feet',
            'Land softly with bent knees',
            'Step down rather than jumping'
        ]
    },
    'line jumps': {
        tips: [
            'Jump side to side over an imaginary line',
            'Land softly with knees bent',
            'Keep jumps quick'
        ]
    },
    'calf raise squats': {
        tips: [
            'Perform squat, then rise onto toes at the top',
            'Lower heels before next squat',
            'Challenges legs and calves'
        ]
    },

    // ==================== CARDIO ====================
    'high knees': {
        tips: [
            'Run in place driving knees up to hip height',
            'Pump arms opposite to legs',
            'Stay on balls of feet, quick tempo'
        ]
    },
    'ass kicker': {
        tips: [
            'Run in place kicking heels up to touch your butt',
            'Keep upper body relatively still',
            'Quick light steps on balls of feet'
        ]
    },
    'skier': {
        tips: [
            'Jump side to side with feet together like a downhill skier',
            'Swing arms opposite to legs',
            'Land softly with knees bent'
        ]
    },
    'skater': {
        tips: [
            'Leap side to side landing on one foot, back leg swings behind',
            'Push off explosively from each leg',
            'Like a speed skater'
        ]
    },
    'prance': {
        tips: [
            'Light bouncy jog with exaggerated arm swings - smile and snap!',
            'Stay on balls of feet',
            'Keep it rhythmic and fun'
        ]
    },
    'backwards jump': {
        tips: [
            'Jump backwards, land softly',
            'Clear the space first',
            'Swing arms for momentum'
        ]
    },
    'jumping jacks': {
        tips: [
            'Classic: jump feet out while raising arms overhead, return',
            'Land softly with slight knee bend',
            'Keep core engaged'
        ]
    },
    'mountain climber': {
        tips: [
            'In plank, drive knees toward chest alternating quickly',
            'Keep hips down, don\'t pike up',
            'Hands under shoulders'
        ]
    },
    'froggers': {
        tips: [
            'Burpee without the pushup: squat, jump back to plank, jump in, stand',
            'Keep core tight jumping back',
            'Great burpee alternative'
        ]
    },
    'kite jumping': {
        tips: [
            'Jump around a yoga mat touching each edge at center',
            'Land softly, immediately jump to next edge',
            'Keep moving continuously'
        ]
    },
    'star jumps': {
        tips: [
            'Jump up spreading arms and legs into a star shape',
            'Bring everything back in before landing',
            'Explode up, land soft'
        ]
    },
    'lizard hops': {
        tips: [
            'From plank, hop both feet to outside of one hand',
            'Alternate sides with each hop',
            'Keep hands planted firmly'
        ]
    },
    'twisted mountain climbers': {
        tips: [
            'Mountain climbers bringing knee toward opposite elbow',
            'Rotate core as knee comes across',
            'Maintain plank position'
        ]
    },
    'run a lap': {
        tips: [
            'Run a lap around your space',
            'Maintain steady pace',
            'Stay light on feet'
        ]
    },
    'suicide': {
        tips: [
            'Sprint to line, touch ground, sprint back, repeat to farther lines',
            'Touch the ground at each line',
            'Decelerate safely before turns'
        ]
    },
    'burpees': {
        tips: [
            'Squat down, jump feet back, pushup, jump feet in, jump up with arms overhead',
            'Keep core tight throughout',
            'Modify by stepping instead of jumping'
        ]
    },

    // ==================== WEIGHTS REQUIRED ====================
    'dumbbell fly': {
        tips: [
            'Lying on back, start with arms wide, bring weights together above chest',
            'Keep slight bend in elbows',
            'Control the lowering'
        ]
    },
    'goblet squat': {
        tips: [
            'Hold weight at chest, squat down',
            'Elbows can touch inside of knees at bottom',
            'Keep chest up, weight in heels'
        ]
    },
    'hamstring curls': {
        tips: [
            'On yoga ball, lift hips and curl ball toward you with heels',
            'Keep hips elevated throughout',
            'Control the ball on the way out'
        ]
    },
    'v crunch ball': {
        tips: [
            'On yoga ball, perform crunches or V-ups',
            'Ball adds instability for extra core work',
            'Move slowly with control'
        ]
    },
    'rollout': {
        tips: [
            'Kneel behind yoga ball, roll forward extending body',
            'Keep core tight - don\'t let back arch',
            'Only go as far as you can control'
        ]
    },
    'dumbbell snatch': {
        tips: [
            'Explosive pull from floor to overhead in one motion',
            'Drive through hips and legs, arm follows',
            'Lock out overhead before lowering'
        ]
    },
    'slams': {
        tips: [
            'Lift weight overhead, slam down forcefully',
            'Use whole body - this is about power',
            'Squat to pick up with straight back'
        ]
    },
    'front lift': {
        tips: [
            'Raise weights in front to shoulder height with straight arms',
            'Control the movement',
            'Don\'t swing'
        ]
    },
    'fly': {
        tips: [
            'Standing or bent over, raise arms out to sides',
            'Slight bend in elbows, squeeze shoulder blades',
            'Control the weight down'
        ]
    },
    'bench': {
        tips: [
            'Press weights up from chest while lying on back',
            'Keep feet flat on floor',
            'Lower with control to chest level'
        ]
    },
    'monkey crunch': {
        tips: [
            'Crunch holding weight, move it side to side',
            'Rotate through core, not just arms',
            'Keep lower back pressed to floor'
        ]
    },
    'marky marks': {
        tips: [
            'Lunge forward while raising weights overhead, step back, repeat',
            'Keep front knee over ankle',
            'Alternate legs each rep'
        ]
    },
    'shrugs': {
        tips: [
            'Hold weights at sides, lift shoulders toward ears',
            'Squeeze at top, don\'t roll shoulders',
            'Straight up and down motion'
        ]
    },

    // ==================== BALANCE ====================
    'tree': {
        tips: [
            'Stand on one leg, other foot on inner thigh or calf (not knee)',
            'Find a focal point to help balance',
            'Hands in prayer position or overhead'
        ]
    },
    'tree raise': {
        tips: [
            'In tree pose, perform calf raises on standing leg',
            'Rise slowly, hold at top, lower with control',
            'Use wall for support if needed'
        ]
    },
    'balance squat': {
        tips: [
            'Perform squats while standing on a balance board',
            'Start shallow, increase depth as you improve',
            'Have something nearby to grab'
        ]
    },
    'warrior 3': {
        tips: [
            'Balance on one leg with body and back leg parallel to floor',
            'Arms can extend forward or along sides',
            'Keep hips square to ground'
        ]
    },

    // ==================== ARM-OTHER ====================
    'bear crawl': {
        tips: [
            'Crawl forward on hands and feet (not knees)',
            'Keep hips low and core tight',
            'Move opposite hand and foot together'
        ]
    },
    'chair dip': {
        tips: [
            'Hands on chair edge, lower body by bending elbows to 90 degrees',
            'Keep back close to chair',
            'Don\'t go lower than 90 degrees'
        ]
    },
    'chair dip hop': {
        tips: [
            'Chair dip with explosive push: hop hands off and back on',
            'Land softly with slight elbow bend',
            'Master regular dips first'
        ]
    },
    'handstand': {
        tips: [
            'Kick up against wall, hold body inverted',
            'Stack wrists under shoulders under hips',
            'Engage core, squeeze legs together'
        ]
    }
};

// Function to get tips for an exercise
function getExerciseTips(exerciseName) {
    const normalizedName = exerciseName.toLowerCase().trim();

    // Direct match
    if (exerciseReference[normalizedName] && exerciseReference[normalizedName].tips) {
        return exerciseReference[normalizedName].tips;
    }

    // Handle "run a lap" alias for "lap"
    if (normalizedName === 'lap') {
        return exerciseReference['run a lap'].tips;
    }

    // Try to find a partial match
    for (const key in exerciseReference) {
        if (normalizedName.includes(key) || key.includes(normalizedName)) {
            if (exerciseReference[key].tips) {
                return exerciseReference[key].tips;
            }
        }
    }

    return [
        'Focus on controlled movements throughout',
        'Keep your core engaged for stability',
        'Breathe steadily - exhale on exertion'
    ];
}

// Function to check if exercise has reference data
function hasExerciseReference(exerciseName) {
    const normalizedName = exerciseName.toLowerCase().trim();
    if (exerciseReference[normalizedName]) return true;
    if (normalizedName === 'lap' && exerciseReference['run a lap']) return true;

    for (const key in exerciseReference) {
        if (normalizedName.includes(key) || key.includes(normalizedName)) {
            return true;
        }
    }
    return false;
}
