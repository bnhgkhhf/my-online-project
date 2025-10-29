        //阅读全文功能的实现
        document.addEventListener('DOMContentLoaded', function() {
            // 获取所有"阅读全文"链接
            const readMoreLinks = document.querySelectorAll('.read-more');
            
            // 为每个链接添加点击事件
            readMoreLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault(); // 阻止默认链接行为
                    
                    const targetId = this.getAttribute('data-target');
                    const content = document.getElementById(targetId);
                    const isExpanded = content.classList.contains('expanded');
                    
                    // 切换展开状态
                    if (isExpanded) {
                        content.classList.remove('expanded');
                        this.textContent = '阅读全文';
                        this.classList.remove('expanded');
                    } else {
                        content.classList.add('expanded');
                        this.textContent = '收起';
                        this.classList.add('expanded');
                    }
                });
            });
        });
        // 移动端菜单切换
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // 主题切换
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        // 检查本地存储的主题偏好
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.textContent = '☀️';
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
            }
        });

        // 表单提交处理
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // 这里可以添加AJAX请求将数据发送到服务器
            console.log('表单数据:', formData);
            
            // 显示成功消息
            alert('感谢您的留言！我会尽快回复您。');
            
            // 重置表单
            contactForm.reset();
        });

        // 平滑滚动到锚点
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // 关闭移动端菜单
                    navMenu.classList.remove('active');
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    