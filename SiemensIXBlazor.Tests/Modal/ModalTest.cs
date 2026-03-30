// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

using Bunit;
using Microsoft.Extensions.DependencyInjection;
using SiemensIXBlazor.Components.Modal;
using Xunit;

namespace SiemensIXBlazor.Tests.Modal
{
    public class ModalTest : TestContextBase
    {
        [Fact]
        public void Modal_Should_Render_With_Basic_Properties()
        {
            // Arrange & Act
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
                .Add(p => p.Animation, true)
                .Add(p => p.BackdropClickClose, true)
                .Add(p => p.CloseOnEscape, true)
                .Add(p => p.Keyboard, true)
            );

            // Assert
            var modal = component.Find("ix-modal");
            Assert.NotNull(modal);
            Assert.Equal("test-modal", modal.GetAttribute("id"));
            Assert.Equal("", modal.GetAttribute("animation"));
            Assert.Equal("", modal.GetAttribute("backdrop-click-close"));
            Assert.Equal("", modal.GetAttribute("close-on-escape"));
            Assert.Equal("", modal.GetAttribute("keyboard"));
        }

        [Fact]
        public void Modal_Should_Render_With_Size_Property()
        {
            // Arrange & Act
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
                .Add(p => p.Size, "lg")
            );

            // Assert
            var modal = component.Find("ix-modal");
            Assert.Equal("lg", modal.GetAttribute("size"));
        }

        [Fact]
        public void Modal_Should_Render_With_Centered_Property()
        {
            // Arrange & Act
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
                .Add(p => p.Centered, true)
            );

            // Assert
            var modal = component.Find("ix-modal");
            Assert.Equal("", modal.GetAttribute("centered"));
        }

        [Fact]
        public void Modal_Should_Render_With_ARIA_Properties()
        {
            // Arrange & Act
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
                .Add(p => p.AriaLabelledBy, "modal-title")
                .Add(p => p.AriaDescribedBy, "modal-description")
            );

            // Assert
            var modal = component.Find("ix-modal");
            Assert.Equal("modal-title", modal.GetAttribute("aria-labelledby"));
            Assert.Equal("modal-description", modal.GetAttribute("aria-describedby"));
        }

        [Fact]
        public void Modal_Should_Render_With_Container_Property()
        {
            // Arrange & Act
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
                .Add(p => p.Container, "custom-container")
            );

            // Assert
            var modal = component.Find("ix-modal");
            Assert.Equal("custom-container", modal.GetAttribute("container"));
        }

        [Fact]
        public void Modal_Should_Render_With_BeforeDismiss_Property()
        {
            // Arrange & Act
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
                .Add(p => p.BeforeDismiss, "handleBeforeDismiss")
            );

            // Assert
            var modal = component.Find("ix-modal");
            Assert.Equal("handleBeforeDismiss", modal.GetAttribute("before-dismiss"));
        }

        [Fact]
        public void Modal_Should_Render_With_ChildContent()
        {
            // Arrange & Act
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
                .AddChildContent("<div>Modal Content</div>")
            );

            // Assert
            var modal = component.Find("ix-modal");
            Assert.Contains("Modal Content", modal.InnerHtml);
        }

        [Fact]
        public void Modal_Should_Render_With_CSS_Class()
        {
            // Arrange & Act
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
                .Add(p => p.Class, "custom-modal-class")
            );

            // Assert
            var modal = component.Find("ix-modal");
            Assert.Equal("custom-modal-class", modal.GetAttribute("class"));
        }

        [Fact]
        public void Modal_Should_Render_With_Style()
        {
            // Arrange & Act
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
                .Add(p => p.Style, "display: block;")
            );

            // Assert
            var modal = component.Find("ix-modal");
            Assert.Equal("display: block;", modal.GetAttribute("style"));
        }

        [Fact]
        public void Modal_Should_Handle_DismissedEvent()
        {
            // Arrange
            bool eventCalled = false;
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
                .Add(p => p.DismissedEvent, () => { eventCalled = true; })
            );

            // Act
            component.InvokeAsync(() => component.Instance.Dismissed());

            // Assert
            Assert.True(eventCalled);
        }

        [Fact]
        public void Modal_Should_Handle_ShownEvent()
        {
            // Arrange
            bool eventCalled = false;
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
                .Add(p => p.ShownEvent, () => { eventCalled = true; })
            );

            // Act
            component.InvokeAsync(() => component.Instance.Shown());

            // Assert
            Assert.True(eventCalled);
        }

        [Fact]
        public void Modal_Should_Have_Show_Method()
        {
            // Arrange
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
            );

            // Act & Assert (should not throw)
            Assert.NotNull(component.Instance.ShowAsync);
        }

        [Fact]
        public void Modal_Should_Have_Hide_Method()
        {
            // Arrange
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
            );

            // Act & Assert (should not throw)
            Assert.NotNull(component.Instance.HideAsync);
        }

        [Fact]
        public void Modal_Should_Have_Toggle_Method()
        {
            // Arrange
            var component = RenderComponent<SiemensIXBlazor.Components.Modal.Modal>(parameters => parameters
                .Add(p => p.Id, "test-modal")
            );

            // Act & Assert (should not throw)
            Assert.NotNull(component.Instance.ToggleAsync);
        }
    }
}
