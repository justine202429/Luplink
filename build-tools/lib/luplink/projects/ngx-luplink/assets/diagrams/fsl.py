
import matplotlib.pyplot as plt
import numpy as np
import math
import matplotlib.colors as mcolors
from matplotlib import cm

def fsl(x, f):
    return ((4*f*math.pi*x)/(3*10e5))**2
def fsl_db(x, f):
    return 10*np.log10(fsl(x,f))

x = np.logspace(-1, 2, 500)
frequencies = np.linspace(300*10e6, 6*10e9, num=15)
# frequencies = np.logspace(6, 10, num=10)
colors = plt.cm.viridis(np.linspace(0,1, len(frequencies)))
plt.cm.viridis(0.5)
fig=plt.figure()
ax=fig.add_subplot(111)
for i in range(len(frequencies)):
    y = fsl_db(x, frequencies[i])
    ax.plot(x, y, color=colors[i])
ax.set(ylabel='Loss (dB)', xlabel='Distance (km)')
ax.set_title('Free Space Path Loss (FSPL)')
cmap, norm = mcolors.from_levels_and_colors(range(len(frequencies) + 1), colors)
sm = cm.ScalarMappable(cmap=cmap, norm=norm)
sm.set_array([])


bx= fig.colorbar(sm)
# bx.set_ylabel('Frequency (GHz)')

plt.show()
