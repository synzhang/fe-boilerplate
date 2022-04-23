# Front End Development Boilerplates

[Chinese](https://github.com/synzhang/fe-boilerplate/blob/master/README.zh-CN.md)

## Goals

### Developer Experience

#### Easy to start

#### Atomic

The functionality provided by each component is just right for the business needs.

#### Extensible

Support plugins and presets.

#### Out of the Box

As many common functions as possible are built in to meet daily development needs.

#### Entropy

The second law of thermodynamics says something like “with time, things turn into a mess”. How do we tame the combinatorial explosion of possible states and make visual output predictable?

#### High Performance

#### Security

#### Push code updates

#### Future Ready

Exploring new technologies while meeting demand.

### User Experience

#### Consistency

- Keep the same data in sync on different parts of the screen.
- Make the local data consistent with the server, and the other way around

#### Responsiveness

People can only tolerate a lack of visual feedback to their actions for a limited time. For continuous actions like gestures and scroll, this limit is low. (Even skipping a single 16ms frame feels “janky”.) For discrete actions like clicks, there is research saying users perceive any < 100ms delays as equally fast. If an action takes longer, we need to show a visual indicator. But there are some counter-intuitive challenges. Indicators that cause the page layout to “jump” or that go through several loading “stages” can make the action feel longer than it was. Similarly, handling an interaction within 20ms at the cost of dropping an animation frame can feel slower than handling it within 30ms and no dropped frames. Brains aren’t benchmarks.

Optimized to render every frame at 60FPS.

#### Latency

Both computations and network access take time. Sometimes we can ignore the computational cost if it doesn’t hurt the responsiveness on our target devices (make sure to test your app on the low-end device spectrum). But handling network latency is unavoidable — it can take seconds! Our app can’t just freeze waiting for the data or code to load. This means any action that depends on new data, code, or assets is potentially asynchronous and needs to handle the “loading” case. But that can happen for almost every screen. How do we gracefully handle latency without displaying a “cascade” of spinners or empty “holes”? How do we avoid “jumpy” layout? And how do we change async dependencies without “rewiring” our code every time?

Act immediately on user input

#### Navigation

Even navigating to another screen is like walking into a room. People expect to go back later and find things as they left them (with, perhaps, some new items).

How do we architect our app to handle arbitrary navigation without losing important context?

Don't break history, enhance it

#### Staleness

By introducing a local cache, we can “remember” some data for quick access. But caching brings its own problems. Caches can get stale.

#### Priority

Some things are more important than others. You can rank the contenders on a shared scale of “importance”.

#### Accessibility

We need to make our apps not horrible to people with difficulties.

#### Internationalization

#### Delivery

We need to get our application code to the user’s computer.

Native apps tend to load all code in advance at the cost of a huge app size. Web apps tend to have smaller initial payload at the cost of more latency during use. How do we choose at which point to introduce latency? How do we optimize our delivery based on the usage patterns? What kind of data would we need for an optimal solution?

#### Resilience

A crash rendering a single post shouldn’t “bring down” an entire feed or get it into a semi-broken state that causes further crashes. How do we write code in a way that isolates rendering and fetching failures and keeps the rest of the app running? What does fault tolerance mean for user interfaces?

#### Natural

##### Natural user cognition

According to cognitive psychology, about 80% of external information is obtained through visual channels. The most important visual elements in the interface design, including layout, colors, illustrations, icons, etc., should fully absorb the laws of nature, thereby reducing the user's cognitive cost and bringing authentic and smooth feelings. In some scenarios, opportunely adding other sensory channels such as hearing, touch can create a richer and more natural product experience.

##### Natural user behavior

In the interaction with the system, the designer should fully understand the relationship between users, system roles, and task objectives, and also contextually organize system functions and services. At the same time, a series of methods such as behavior analysis, artificial intelligence and sensors could be applied to assist users to make effective decisions and reduce extra operations of users, to save users' mental and physical resources and make human-computer interaction more natural.

#### Certain

##### Designer certainty

Enterprise products are made by collaboration. The more participants, the higher the entropy of cooperation. This is why low-efficiency design and difficult maintenance of the product system exists. By exploring the design rules and modular design ideas, designers should be provided with simplified design rules, components and patterns so they can reduce the cooperative entropy and a more efficient design process.

###### Keep restraint

Don't make a decision before you figure it out. Designers should focus on the most valuable product features using minimal design elements to express. As Antoine de St. Exupery said: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."

###### Modular design

Encapsulating the complex or reusable parts could provide limited interfaces to interact with other modules, ultimately reducing overall system complexity, thereby improving reliability and maintainability. Designers can use existing resources or abstract their reusable resources to save the unnecessary and low additional design to keep their focus on where creativity is most needed.

#### User certainty

User's daily work is completed through the collaboration of enterprise products. In addition to considering the consistency of a single product design, good certainty is required to be maintained across products, terminals, and systems. Consistent appearance and interaction, maintaining a familiarity to user, can reduce the difficulty of learning, cognitive and operating costs, and improve work efficiency.

#### Meaningful

A product or function is created by a designer not because of the designer's needs, but to carry a user's work mission. Product design should be user-centered to promote the achievement of the user's mission. Simultaneously, based on "nature" and "certainty" design values, we should regard user's human needs and create meaningful human-computer interaction for the work process.

##### Meaning of result

Clear goals, immediate feedback. Understand the objectives, clearly disassemble the sub-objectives according to the use process, and let each interaction revolve around the achievement of the main objectives. Provide appropriate and immediate feedback for each action, so that users can understand the operation results. Besides, emotional design can be used to pacify users' negative emotions and enhance users' positive emotions.

##### Meaning of process

Moderate challenge, full devotion. Adjust the difficulty of work in different scenarios, make the function trigger at the right time to match the user's skill. If not necessary, do not add entities. Do not distract users, let users focus on task achievement, rather than the interface. Let the current work be neither to simple nor too complex. The challenges are moderate, but higher challenges are raised as the user's capabilities grow. It allows users to continue to immerse themselves in the flow of work and gain fulfilling work experience.

#### Growing

Designers should design with the vision of development and consider the common growth of both ends of humans and computers.

##### Value connection

The growth of products depends on the expansion and deep use of users, while the growth of users depends on the growth of product functions. Designers should establish system design thinking, understand the value of product functions, explore user needs in different scenarios, and establish a connection between value and needs. Let product value be discovered and help users build more effective and efficient ways of working.

##### Man-Computer Symbiosis

More connections between product functions and user requirements make human-computer interaction closer and users and system are growing together. When designing products, users and systems should not be separated from each other. They should be considered as a dynamic group to ensure that they are flexible, inclusive and full of vitality.

## Features

1. [Classic Front-web development](./templates/classic)
2. [CSR](./templates/classic)
3. [SSR](./templates/server-side-rendering)
4. [React Native](./templates/expo)

## Usage

## Docs

- [Naming cheatsheet](https://github.com/kettanaito/naming-cheatsheet)

## References

- [Conformance for Frameworks](https://web.dev/conformance/)
- [7 Principles of Rich Web Applications](https://rauchg.com/2014/7-principles-of-rich-web-applications)
- [The Elements of UI Engineering](https://overreacted.io/the-elements-of-ui-engineering/)
