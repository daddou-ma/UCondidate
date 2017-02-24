let UTimer = function() {
    
    $level1  = document.getElementById('l1')
    $level2  = document.getElementById('l2')
    $level3  = document.getElementById('l3')

    
    let idInterval = null
    let idTimeout  = null
    
    this.random = {
        get random() {
            return random;
        },
        set random(value) {
            
            random = value
            
            let l1 = Math.floor(random / 100)
            let l2 = Math.floor((random % 100) / 10)
            let l3 = random % 10
            
            $level1.innerText = l1
            $level2.innerText = l2
            $level3.innerText = l3
        }
    }

    let self = this
    
    this.reset = function() {
        
        clearInterval(idInterval)
        idInterval = null
        
        self.random.random = 0
    }
    
    
    this.reset()
    
    this.start = function(min, max) {
        
        this.reset()
        
        idInterval = setInterval(function() {
            self.random.random = Math.floor(Math.random() * (max - min + 1)) + min
        }, 10)
        
        idTimeout = setTimeout(function() {
            clearInterval(idInterval)
        }, 5000)
    }    
    
    return this;
}

let Dialog = function() {
    $dialog = document.getElementById('dialog')
    $input = document.getElementById('input')
    
    this.show = function() {
        $dialog.style.display = 'block'
    }
    
    this.hide = function() {
        $dialog.style.display = 'none'
    }
    
    this.next = function() {
        timer.start(0, $input.value)
        this.hide()
    }
    return this;
}

let timer = new UTimer()
let dialog = new Dialog()
