 // Toggle mobile menu
 const menuBtn = document.getElementById('menuBtn');
 const sidebar = document.getElementById('sidebar');

 menuBtn.addEventListener('click', () => {
     sidebar.classList.toggle('active');
 });

 // Simulate posts data
 const posts = [
     {
         id: 1,
         user: {
             name: 'Sarah Wilson',
             avatar: 'https://source.unsplash.com/random/50x50'
         },
         content: 'Just finished my latest project! 🚀 #webdev',
         image: 'https://source.unsplash.com/random/600x400',
         likes: 42,
         comments: 12,
         time: '2 hours ago'
     },
     {
         id: 2,
         user: {
             name: 'Mike Johnson',
             avatar: 'https://source.unsplash.com/random/51x51'
         },
         content: 'Beautiful day for a hike! 🏔️',
         image: 'https://source.unsplash.com/random/601x400',
         likes: 28,
         comments: 5,
         time: '4 hours ago'
     }
 ];

 // Render posts
 const postsContainer = document.getElementById('posts-container');

 function renderPosts() {
     postsContainer.innerHTML = posts.map(post => `
         <div class="bg-white rounded-lg shadow-md p-4 post-card">
             <div class="flex items-center space-x-3 mb-4">
                 <img src="${post.user.avatar}" class="w-10 h-10 rounded-full" alt="${post.user.name}">
                 <div>
                     <h3 class="font-semibold">${post.user.name}</h3>
                     <p class="text-gray-500 text-sm">${post.time}</p>
                 </div>
             </div>
             <p class="mb-4">${post.content}</p>
             <img src="${post.image}" class="rounded-lg w-full mb-4" alt="Post image">
             <div class="flex justify-between items-center border-t pt-4">
                 <button class="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                     <i class="bi bi-heart"></i>
                     <span>${post.likes}</span>
                 </button>
                 <button class="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                     <i class="bi bi-chat"></i>
                     <span>${post.comments}</span>
                 </button>
                 <button class="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                     <i class="bi bi-share"></i>
                     <span>Share</span>
                 </button>
             </div>
         </div>
     `).join('');
 }

 // Initial render
 renderPosts();

 // Simulate new post creation
 const newPostInput = document.querySelector('input[type="text"]');
 const postButton = document.querySelector('button:contains("Post")');

 if(postButton) {
     postButton.addEventListener('click', () => {
         if(newPostInput.value.trim()) {
             const newPost = {
                 id: posts.length + 1,
                 user: {
                     name: 'John Doe',
                     avatar: 'https://source.unsplash.com/random/40x40'
                 },
                 content: newPostInput.value,
                 image: 'https://source.unsplash.com/random/602x400',
                 likes: 0,
                 comments: 0,
                 time: 'Just now'
             };
             
             posts.unshift(newPost);
             renderPosts();
             newPostInput.value = '';
         }
     });
 }

 // Handle DB operations using the provided API
 async function handleDBOperation(action, data) {
     try {
         const response = await fetch('https://r0c8kgwocscg8gsokogwwsw4.zetaverse.one/db', {
             method: 'POST',
             headers: {
                 'Authorization': 'Bearer HE4zmYN1M2PTZoVhDhvM0cg1kN52',
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 userId: localStorage.getItem('userId') || 'user-' + Date.now(),
                 appSlug: 'social-community',
                 action: action,
                 table: 'posts',
                 data: data
             })
         });
         
         const result = await response.json();
         return result;
     } catch (error) {
         console.error('Error:', error);
         return null;
     }
 }
 function toggleMobileMenu() {
     const menu = document.getElementById('mobileMenu');
     menu.classList.toggle('translate-x-full');
 }

 document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);

 // Simulate loading more posts on scroll
 window.addEventListener('scroll', () => {
     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
         loadMorePosts();
     }
 });

 function loadMorePosts() {
     // Simulate loading delay
     const feed = document.getElementById('postsFeed');
     const loadingPost = document.createElement('div');
     loadingPost.className = 'bg-white rounded-lg shadow p-4 animate-pulse';
     loadingPost.innerHTML = `
         <div class="flex space-x-3 mb-4">
             <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
             <div class="flex-1">
                 <div class="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                 <div class="h-3 bg-gray-200 rounded w-1/5"></div>
             </div>
         </div>
         <div class="h-24 bg-gray-200 rounded mb-4"></div>
         <div class="flex justify-between">
             <div class="h-4 bg-gray-200 rounded w-16"></div>
             <div class="h-4 bg-gray-200 rounded w-16"></div>
             <div class="h-4 bg-gray-200 rounded w-16"></div>
         </div>
     `;
     feed.appendChild(loadingPost);
 }
 function toggleModal(modalId) {
     const modal = document.getElementById(modalId);
     modal.classList.toggle('hidden');
 }


