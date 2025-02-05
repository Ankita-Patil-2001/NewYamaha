document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.querySelector('.filter-btn');
    const dropdown = document.getElementById('filterDropdown');
    const containers = [
        document.getElementById('container2-1'),
        document.getElementById('container2-2'),
        document.getElementById('container2-3'),
        document.getElementById('container2-4')
    ];
    const dropdownContainers = document.querySelector('.dropdown-containers');
    let isOpen = false;
    
    // Store original parent of containers
    const originalParent = containers[0].parentElement;
    
    filterBtn.addEventListener('click', function() {
        isOpen = !isOpen;
        
        if (isOpen) {
            // Move containers to dropdown
            containers.forEach(container => {
                dropdownContainers.appendChild(container);
            });
            dropdown.classList.add('show');
        } else {
            // Move containers back to original location
            containers.forEach(container => {
                originalParent.appendChild(container);
            });
            dropdown.classList.remove('show');
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && !filterBtn.contains(event.target)) {
            if (isOpen) {
                isOpen = false;
                containers.forEach(container => {
                    originalParent.appendChild(container);
                });
                dropdown.classList.remove('show');
            }
        }
    });
});